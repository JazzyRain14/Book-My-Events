import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"

import { authRouter } from './routes/authRouth';

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT
const DB_URI = process.env.MONGO_URI;

if (!DB_URI) {
  console.error('Error: MONGO_URI is not defined in your .env file!');
  process.exit(1); // Exit if critical variable is missing
}

mongoose.connect(DB_URI).then(() => {
  console.log('Connected to MongoDB successfully!');
  app.listen(port, () => {
    console.log(`Express server listening on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1);
});

app.use("/auth", authRouter);



// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

// app.post('/api/data', (req, res) => {
//   const receivedData = req.body; // Corrected typo
//   console.log('Received Data:', receivedData); // Corrected typo

//   res.status(200).json({
//     message: 'Data received successfully!', // Corrected typo
//     yourData: receivedData,
//     timestamp: new Date().toISOString()
//   });
// });


// app.post("/api/tasks", async (req: Request, res: Response) => {
//   try {
//     const { title, completed } = req.body;

//     const newTask = await Task.create({ title, completed });

//     res.status(201).json({ success: true, data: newTask });
//   } catch (error: any) {
//     if (error.name === 'ValidationError') {
//       const messages = Object.values(error.errors).map((val: any) => val.message);
//       return res.status(400).json({ success: false, error: messages })
//     } else {
//       console.error(error);
//       return res.status(500).json({ success: false, error: 'Server Error' })

//     }
//   }
// })


// // get all Data
// app.get("/api/tasks", async (req: Request, res: Response) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ success: true, count: tasks.length, data: tasks })
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Server Error' })

//   }
// })

// // get by ID
// app.get("/api/tasks/:id", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findById(id);

//     if (!task) {
//       return res.status(404).json({ success: false, error: `No task with id: ${id}` })
//     }
//     res.status(200).json({ success: true, data: task });
//   } catch (error: any) {
//     if (error.name === 'CastError') { // Mongoose throws CastError for invalid IDs
//       return res.status(400).json({ success: false, error: 'Invalid task ID format' });
//     }
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Server Error' });
//   }
// })

// // Update
// app.patch("/api/tasks/:id", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;

//     const task = await Task.findByIdAndUpdate(id, updates, {
//       new: true,
//       runValidators: true
//     })

//     if (!task) {
//       return res.status(404).json({ success: false, error: `No task with id: ${id}` });
//     }
//     res.status(200).json({ success: true, data: task });

//   }
//   catch (error: any) {
//     // Handle validation errors (e.g., if you try to set title to >50 chars)
//     if (error.name === 'ValidationError') {
//       const messages = Object.values(error.errors).map((val: any) => val.message);
//       return res.status(400).json({ success: false, error: messages });
//     }
//     // Handle invalid ID format
//     if (error.name === 'CastError') {
//       return res.status(400).json({ success: false, error: 'Invalid task ID format' });
//     }
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Server Error' });
//   }
// })

// // Delete
// app.delete('/api/tasks/:id', async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params; // Get the ID from URL parameters

//     // Find the task by ID and delete it
//     const task = await Task.findByIdAndDelete(id);

//     // If no task is found with that ID
//     if (!task) {
//       return res.status(404).json({ success: false, error: `No task with id: ${id}` });
//     }

//     // Send a success response. Often, you might send the deleted task back,
//     // or just a success message.
//     res.status(200).json({ success: true, data: {} }); // Or: { success: true, data: task }
//   } catch (error: any) {
//     // Handle invalid ID format
//     if (error.name === 'CastError') {
//       return res.status(400).json({ success: false, error: 'Invalid task ID format' });
//     }
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Server Error' });
//   }
// }); 