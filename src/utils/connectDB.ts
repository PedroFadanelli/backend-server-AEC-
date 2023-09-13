import mongoose from "mongoose";
import config from "config";

//const dbUrl = `mongodb://${config.get("dbName")}:${config.get(
//  "dbPass"
//)}@localhost:6000/jwtAuth?authSource=admin`;

const dbUrl = 'mongodb://127.0.0.1:27017/aprender_e_crescer';

//console.log(dbUrl);
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database connected...");
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
