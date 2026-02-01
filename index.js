//create server

// const express = require('express')
import express from 'express'
const app = express();
// const mongoose = require('mongoose');
import mongoose from 'mongoose'
import restaurantRoutes from './routes/restaurant.routes.js';
import userRoutes from './routes/user.routes.js';
import cors from 'cors'
// mongoose.connect('mongodb://127.0.0.1:27017/test')// return a promise
mongoose.connect('mongodb+srv://jerris3050_db_user:oNPav1iYSntYwEY8@cluster0.rkoagij.mongodb.net/')
.then(()=>{console.log('DB CONNECTED');})
.catch(()=>{console.log('DB NOT CONNECTED');})

app.use(express.json())// body parsing middleware
app.use(cors());// allows sharing of data between two origins
app.get('/', (req,res)=>{
    res.send("welcome to root file and thanks");
})

restaurantRoutes(app);
userRoutes(app);
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);

})