import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Provide a valid valid email',
    },

    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  lastName: {
    type: String,
    maxlength: 20,
    default: 'lastName',
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'PH',
  },
});

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.method.createJWT = function () {
  return jwt.sign({ id: this._id }, 'jwtSecret', { expiresIn: '1d' });
};

export default mongoose.model('User', UserSchema);
