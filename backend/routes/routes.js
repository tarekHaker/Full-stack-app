const express=require("express");
const router=express.Router();
const {create, find, findBalance, updateLatest, deleteExpense,updateOne}=require("../controlers/crontrolers")

router.post("/post",create);
router.get("/", find);
router.get('/findBalance',findBalance),
router.put('/updateLatest', updateLatest);
router.put('/updateOne/:id', updateOne)
router.delete('/delete/:id', deleteExpense);


module.exports=router