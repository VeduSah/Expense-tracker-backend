const express=require('express');
const{createExpense,getExpensebyId,deletebyId,getallExpense}=require('../controller/ExpenseController')
const router=express.Router();
router.get('/',getallExpense)
router.post('/create',createExpense);
router.get('/:id',getExpensebyId);
router.delete('/:id',deletebyId)
module.exports=router;