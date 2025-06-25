import express, { Response, Request } from 'express';
import mongoose from 'mongoose';
import Users from '../models/auth';
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'


export const SignupController = async (req: Request, res: Response) => {
     const { userName, userEmail, userPassword, role } = req.body

     try {
          if (!userEmail || !userPassword) {
               return res.status(400).json({
                    message: 'Email and password are required'
               })
          }

          if (userPassword.length > 15) {
               return res.status(400).json({
                    message: 'password must be at least 15 characters'
               })
          }

          const existingUser = await Users.findOne({ userEmail });
          if (existingUser) {
               return res.status(409).json({ message: 'User with email exists' })
          }

          const salt = await bycrypt.genSalt(10);
          const hashedPassword = await bycrypt.hash(userPassword, salt);

          const newUser = {
               userName,
               userEmail,
               userPassword: hashedPassword,
               role,
          }

          const data = await Users.create(newUser);

          const payload = {
               id: data._id,
               email: data.userEmail,
               role: data.role
          }

          const token = jwt.sign(
               payload,
               process.env.JWT_URI as string,
               { expiresIn: '1h' }
          )

          res.status(201).json({
               message: 'Data received successfully!',
               token,
               user: {
                    _id: data._id,
                    userName: data.userName,
                    userEmail: data.userEmail,
                    role: data.role
               },
               timestamp: new Date().toISOString()
          });

     } catch (error: any) {
          res.status(404).json({
               message: `Error: ${error}`,
               timestamp: new Date().toISOString()
          });
          console.log(error)
     }
};

export const LoginController = async (req: Request, res: Response) => {
     const { userEmail, userPassword } = req.body

     try {
          if (!userEmail || !userPassword) {
               return res.status(400).json({ message: 'email and password are required' })
          }

          const user = await Users.findOne({ userEmail });

          if (!user) {
               return res.status(401).json({ message: 'Invalid Credentials' })
          }

          const isMatch = await bycrypt.compare(userPassword, user.userPassword)
          if (!isMatch) {
               res.status(401).json({ message: 'Invalid Credentials' })
          }

          const payload = {
               id: user._id,
               email: user.userEmail,
               role: user.role
          }

          const token = jwt.sign(
               payload,
               process.env.JWT_URI as string,
               { expiresIn: '1h' }
          )

          res.status(200).json({
               message: 'looged in succesfully',
               token,
               user: {
                    _id: user._id,
                    userName: user.userName,
                    userEmail: user.userEmail,
                    role: user.role
               }
          })
     } catch (error: any) {
          console.log('Login Error:', error);

          res.status(500).json({
               message: 'Server error during login',
               error: error.message,
               timeStamp: new Date().toString()
          })

     }
}