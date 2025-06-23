    // config/db.js
    // This file is responsible for establishing the connection t your MongoDB database.

    import { connect } from 'mongoose';

    // Define an asynchronous function to handle the database connection.
    const connectDB = async () => {
      try {
        // Attempt to connect to MongoDB using the URI loaded from the .env file.
        // `process.env.MONGO_URI` is made available by the `dotenv` package.
        await connect(process.env.MONGO_URI);

        // If the connection is successful, log a success message.
        console.log('MongoDB Connected successfully!');
      } catch (err) {
        // If an error occurs during connection, log the error message.
        console.error('MongoDB Connection Error:', err.message);
        // Exit the Node.js process with a failure code (1).
        // This is important because the application cannot function without a database connection.
        process.exit(1);
      }
    };

    // Export the `connectDB` function so it can be called from your main server file.
    export default connectDB;
    