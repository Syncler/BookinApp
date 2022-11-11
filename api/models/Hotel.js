import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true    
  },
  type: {
    type: String,
    required: true    
  },
  city:{
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true
  },
  distance:{
    type: String,
    required: true
  },
  photos:{
    type: [String],
  },
  title:{
    type: String,
    require: true,
  },
    desc:{
    type: String,
    require: true,
  },
  ratting:{
    type: Number,
    min: 0,
    max: 5,
  },
  rooms:{
    type: [String]
  },
  chipestPrice:{
    type: Number,
    required: true
  },
  featured:{
    type: Number,
    default: false
  }
})

export default mongoose.model("Hotel", HotelSchema)