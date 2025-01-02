const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { userRouter } = require('./routes/userRoutes');
const { connectToDatabase } = require('./config/dbConfig');
dotenv.config()
app.use(bodyParser.json());


app.use('/api/users', userRouter);
connectToDatabase()
app.listen(process.env.PORT,() => {
    console.log(`Server running on port ${process.env.PORT}`);
});