const express=require('express');
const dotenv=require('dotenv')
const cors=require('cors')
const connectDB=require('./src/config/db')
const ExpenseRoute=require('./src/routes/ExpenseRoutes');
dotenv.config();
connectDB();

const port=3000;    
const app=express();
app.use(express.json());
app.use(cors());

app.get('/hello',(req,res)=>{
    res.send("Hello brother")
})
app.use('/api/expenses',ExpenseRoute)
app.listen(port,()=>{
    console.log(`Your Application start at port number: ${port}`)
})