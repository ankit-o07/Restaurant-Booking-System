import express from 'express';
import Booking from '../models/booking.js';
import Slot from '../models/slot.js';

const router = express.Router();

//Check Avalibilty
router.get('/check-availability', async (req, res) => {
  
  try {
    const { date } = req.query; 

    if (!date) {
      return res.status(400).json({ message: 'Date parameter is required' });
    }

    // Define slot times (10:00 AM to 10:00 PM, 12 slots)
    const slotTimes = [
      "10:00 - 11:00", "11:00 - 12:00", "12:00 - 01:00", "01:00 - 02:00", 
      "02:00 - 03:00", "03:00 - 04:00", "04:00 - 05:00", "05:00 - 06:00",
      "06:00 - 07:00", "07:00 - 08:00", "08:00 - 09:00", "09:00 - 10:00"
    ];

    const availability = [];

    // Check and create slots
    for (let slotTime of slotTimes) {
      let slot = await Slot.findOne({ date, slotTime });

      // If the slot does not exist, create it
      if (!slot) {
        slot = new Slot({
          date,
          slotTime,
          isBooked: false,
        });
        await slot.save(); // Save the slot to the database
      }

      // Push the slot availability to the result array
      availability.push({
        slotTime,
        isBooked: slot.isBooked
      });
    }

    // Send the availability response
    res.status(200).json({ date, slots: availability });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Create booking
router.post('/', async (req, res) => {
  try {
    const { name, contact, guests, email , date, time} = req.body;
    
    
    // Find the slot using the slotId
    const slot = await Slot.findOne({ date, slotTime: time });
    
    if (!slot) {
      return res.status(400).json({ message: 'Slot not found' });
    }

    // Check if the slot is already booked
    if (slot.isBooked) {
      return res.status(400).json({ message: 'Slot is already booked' });
    }
    
    // Create the new booking
    const booking = new Booking({
      name,
      contact,
      email,
      guestNo:guests,
      slot: slot._id, // Reference to the Slot document
    });
    console.log("test 2")
    
    console.log(booking);

    // Mark the slot as booked
    slot.isBooked = true;
    await slot.save();

    // Save the booking to the database
    await booking.save();

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('slot'); // Populating slot data
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Delete booking
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the booking
    const booking = await Booking.findById(id).populate('slot');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Unbook the associated slot
    const slot = booking.slot;
    slot.isBooked = false;
    await slot.save();

    // Delete the booking
    await Booking.findByIdAndDelete(id);

    res.status(200).json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
