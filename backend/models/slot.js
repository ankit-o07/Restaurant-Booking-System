import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema({
  date: {
    type: String, // Format: YYYY-MM-DD
    required: true,
  },
  slotTime: {
    type: String, // Format: "10:00 - 11:00"
    required: true,
  },
  isBooked: {
    type: Boolean,
    default: false, // A slot is initially not booked
  },
});

const Slot = mongoose.model('Slot', slotSchema);
export default Slot;
