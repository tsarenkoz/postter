import mongoose from "mongoose";

import { SERVER, DB } from "../constants.js";

const ConnectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${SERVER}/${DB}`);
  } catch (err) {
    console.log("Failed to connect to MONGODB", err);
  }
};

export default ConnectDB;
