const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { userRouter } = require('./routes/userRoutes');
const { connectToDatabase } = require('./config/dbConfig');
const { verifyToken } = require('./middleware/verifyToken');
dotenv.config()
app.use(bodyParser.json());
app.use(verifyToken)

app.use('/api/users', userRouter);
connectToDatabase()
app.listen(process.env.PORT,() => {
    console.log(`Server running on port ${process.env.PORT}`);
});