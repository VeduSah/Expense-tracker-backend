const mongoose=require('mongoose');
const ExpenseModel=require('../models/ExpenseModel.js')
const createExpense=async(req,res)=>{
    const{ProductName,GadgetName,Price,Date}=req.body;
    try{
const expenseDoc= await ExpenseModel.create({
    ProductName,
    GadgetName,
    Price,
    Date});
return res.status(200).json({message:'expense created',data:expenseDoc});
    }
    catch(err){
        console.log(err)
res.status(500).json({message:'unable to create expense'});
    }
}
const getExpensebyId=async(req,res)=>{
    try{
const Expense=await ExpenseModel.find({_id:req.params.id});
res.status(200).json({data:Expense})
    }
    catch(err){
res.status(500).json({message:"Id does not exist"});
    }
}
const deletebyId=async(req,res)=>{
    try{
const deleteExpense=await ExpenseModel.deleteOne({_id:req.params.id})
res.status(200).json({message:'Deleted sucess'})
    }
    catch(err){
res.status(500).json({message:'Id not found'})
    }
}
const updateExpense=async(req,res)=>{

}
const getallExpense=async(req,res)=>{
    try{
const allExpense=await ExpenseModel.find();
res.status(200).json(allExpense)
    }
    catch(err){
res.status(500).json({message:"No data"})
    }
}

module.exports={createExpense,getExpensebyId,deletebyId,getallExpense}