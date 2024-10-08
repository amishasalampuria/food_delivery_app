// add type=module in package.json
//converting data into JSON, it takes JSON data that is sent to your server, parses it, and makes it available for you to work with in your Express.js route handlers as a JavaScript object.

import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'

// import userRouter from 'C:/Web_Development/tomato/backend/routes/userRoute.js'

import "dotenv/config"
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//app config
const app = express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())     //using this we can access backend from frontend

//db connection
connectDB()

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get('/', (req, res)=>{
        res.send("API Working")
      
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//npm run server

//mongodb+srv://<username>:<password>@chatapp.jn9av51.mongodb.net/
