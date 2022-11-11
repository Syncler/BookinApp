import express from 'express';
import dotenv  from 'dotenv';
import mongoose from 'mongoose';
import authRoute  from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';

const app = express();
dotenv.config();

const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () =>{
  console.log("mongoDB disconneted!!!");
})

mongoose.connection.on("connected", ()=>{
  console.log(`mongoDB connected`);
})

app.get('/', (req,res) =>{
  res.status(200).json('You are root route! Class estoped in 49 minutes creating auth controllers ')
})

//midlewares
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute );
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute );

app.use((err, req,res,next) =>{
  const errorStatus = err.status  || 500
  const errorMessage = err.message || "Something went wrong!!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(process.env.PORT, ()=>{
  connectDB()
  console.log(`Connected to backend at http://www.localhost:${process.env.PORT}`);
})
