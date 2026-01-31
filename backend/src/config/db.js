const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("✅ connectDB() appelée");
  const uri = process.env.MONGODB_URI;

  if (!uri) throw new Error("MONGODB_URI manquant dans .env");

  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
};

module.exports = connectDB;




 //3 Mongoose ouvre une connexion TCP vers MongoDB