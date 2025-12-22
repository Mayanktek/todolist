const express=require('express')
const connectDB=require('./config/db')
const router=require('./route/allRoutes')
const cors=require('cors')
const app=express();
const port=3001;
app.use(cors({
    origin:'http://localhost:3001',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
app.use(express.json())
connectDB();
app.use('/api',router)
app.listen(port,()=>console.log('server is running !'))