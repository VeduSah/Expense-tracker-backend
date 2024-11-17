
// const mongoose=require('mongoose');
// require('dotenv').config();
// //database connection
// mongoose.connect(process.env.MONGOOSE_URL);
// mongoose.connection.once('connected',()=>console.log('Database connected')
// );
// mongoose.connection.on('error',(err)=>console.log('Database err',err)
// )
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOOSE_URL, {

    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // process.exit(1);
  }
};

module.exports = connectDB;