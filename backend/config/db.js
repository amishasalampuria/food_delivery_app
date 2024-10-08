import mongoose from 'mongoose'

export const connectDB = async ()=>{
  await  mongoose.connect('mongodb+srv://amisha:220200@chatapp.jn9av51.mongodb.net/food-app').then(()=>console.log("DB connected "))
}