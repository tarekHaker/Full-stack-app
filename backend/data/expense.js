const mongoose = require('./connect');

const schema = mongoose.Schema(
    {
        category : String,
        date : String,
        description : String,
        amount : Number,
        income : Number,
        availableBalance : Number,
        totalExpenses : Number,
   

    },
    {timestamps:true}
);


const MongooseModel=mongoose.model("expense",schema);

module.exports=MongooseModel