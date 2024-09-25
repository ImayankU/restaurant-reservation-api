import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be at least 3 characters long."],
    maxLength: [30, "First name cannot exceed 30 characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be at least 3 characters long."],
    maxLength: [30, "Last name cannot exceed 30 characters."],
  },
  date: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => !isNaN(Date.parse(value)),
      message: "Please provide a valid date.",
    },
  },
  time: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(value),
      message: "Please provide a valid time in HH:mm format.",
    },
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email address."],
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isMobilePhone(value, 'any'),
      message: "Please provide a valid phone number.",
    },
    minLength: [10, "Phone number must contain 10 digits."],
    maxLength: [10, "Phone number must contain 10 digits."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
