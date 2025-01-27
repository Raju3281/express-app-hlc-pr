const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectToDatabase = async () => {
    try {
        const dbUri ='mongodb://localhost:27017/user-service';
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,     // Use new URL string parser
            useUnifiedTopology: true, // Use new server discovery and monitoring engine
            serverSelectionTimeoutMS: 20000,
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = { connectToDatabase };
