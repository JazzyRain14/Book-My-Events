import express, { Response, Request } from 'express';
import mongoose from 'mongoose';
import Users from '../models/auth';
import bycrypt from 'bcryptjs'

export const SignupController = async (req: Request, res: Response) => {
     const { userName, userEmail, userPassword, isUser } = req.body
     try {
          if (!userEmail || !userPassword) {
               return res.status(400).json({
                    message: 'Email and password are required'
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
               isUser,
          }

          const data = await Users.create(newUser);

          res.status(201).json({
               message: 'Data received successfully!',
               user: {
                    _id: data._id,
                    userName: data.userName,
                    userEmail: data.userEmail,
                    isUser: data.isUser
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