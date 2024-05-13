const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false);
        //With strictQuery = false, Mongoose will not strip out unknown fields from the query filter. This can be useful if you need to query for fields that are not defined in your schema, such as when you are using a dynamic schema
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}



module.exports = connectDB;