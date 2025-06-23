import express, { Response, Request } from 'express';
import mongoose from 'mongoose';
import Users from '../models/auth';

export const SignupController = async (req: Request, res: Response) => {
     const receivedData = req.body;
     console.log('Received Data:', receivedData);
     const newUser = req.body

     try {
          const data = await Users.create(newUser);
          if (data) {
               res.status(200).json({
                    message: 'Data received successfully!', // Corrected typo
                    yourData: receivedData,
                    timestamp: new Date().toISOString()
               });
          }
     } catch (error) {
          res.status(404).json({
               message: `Error: ${error}`, // Corrected typo
               timestamp: new Date().toISOString()
          });
          console.log(error)
     }
};