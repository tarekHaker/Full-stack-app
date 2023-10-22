const mongoose=require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/monthlyExpenseManagement")
.then(()=>console.log("mongoDB connected"))
.catch(err=>console.log("mondb error : "+err));


module.exports=mongoose;