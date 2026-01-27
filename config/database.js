import mongoose from 'mongoose';

let connected = false;
const connectDB = async () => {
    mongoose.set('strictQuery', true); //ensure strict query mode
//is the connection is already established dont conect again
    if (connected) {
        console.log('Database is already connected');
        return;
    }
    //connecting to database
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;}
        catch (error) {
        console.log('Error connecting to database:', error);
        throw error;
    }   

}
export default connectDB;