const mongoose=require('mongoose');
const ExpenseSchema=new mongoose.Schema(
    {
        ProductName:{
            type:String,
            required:true
        },
    GadgetName:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
   
    }
)
module.exports=mongoose.model('Expenses',ExpenseSchema);