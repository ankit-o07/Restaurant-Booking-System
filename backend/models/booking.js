import mongoose from 'mongoose';
import Slot from './slot.js';

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  guestNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  slot: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Slot',
    required: true,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
