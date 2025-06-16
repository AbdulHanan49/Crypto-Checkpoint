const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful!");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit the process with failure
  }
};

// Export the function for use in other files
module.exports = connectDB;
