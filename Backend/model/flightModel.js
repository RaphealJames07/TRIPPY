const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: [true, "take of city is required."],
      lowercase: true,
    },
    to: {
      type: String,
      required: [true, "landing city is required."],
      lowercase: true,
    },
    depatureAirport: {
      type: String,
      required: [true, "departure Airport Name required"],
      lowercase: true,
    },
    arrivalAirport: {
      type: String,
      required: [true, "arrival Airport Name required"],
      lowercase: true,
    },
    depatureTime: {
      type: String,
      required: [true, "depature time is required."],
    },
    arrivalTime: {
      type: String,
      required: [true, "arrival time is required."],
    },
    priceStandard: {
      type: Number,
      required: [true, "Standard price is required."],
    },
    priceFlex: {
      type: Number,
      required: [true, "Flex price is required."],
    },
    airlineName: {
      type: String,
      required: [true, "airline name is required."],
    },
    airlineLogo: {
      type: String,
    },
  },
  { timestamps: true }
);

const flightModel = mongoose.model("Flight", flightSchema);

module.exports = flightModel;
