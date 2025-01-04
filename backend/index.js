
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bookingRoutes from "./routes/booking.js"

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restaurant',

).then(() => {
  console.log('Connected to MongoDB');
  
}).catch(err => console.error(err));

app.get("/ping", (req,res)=>{
    res.send("<h1>Pong")
})

app.listen(5000, () => console.log('Server running on port 5000'));


