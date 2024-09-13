const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true, // or ssl: true depending on your MongoDB driver version
    });
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectDB;
