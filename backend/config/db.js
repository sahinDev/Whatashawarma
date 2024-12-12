import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://sahinozturkca:B5bw8c6q4MkvkHtu@cluster0.acqou.mongodb.net/WHATASHAWARMAWEBAPP').then(() => console.log("DB Connected"));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.