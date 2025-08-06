const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();


const app = express();


app.use(cors());               
app.use(express.json());       


const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


const connectDB = require('./config/db');
connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
