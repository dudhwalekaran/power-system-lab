import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
  equipment: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema);
