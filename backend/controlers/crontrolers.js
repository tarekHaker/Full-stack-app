const axios = require ("axios");
const MongooseModel = require("../data/expense");

module.exports = {
    create : async (req,res)=>{
        try{
           const data = await MongooseModel.create(req.body);
           res.status(201).json(data)
        }
        catch(err){
            console.log(err);
            res.status(500).json({message:err.message})
        }
    },
    find : async (req, res)=>{
        try{
            const data = await MongooseModel.find();
            res.status(200).json(data);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    },
    findBalance: async (req, res) => {
        try {
          const latestExpense = await MongooseModel.findOne({}, null, { sort: { createdAt: -1 } });
          if (latestExpense) {
            const availableBalance = latestExpense.availableBalance;
            res.status(200).json({ availableBalance });
          } else {
            res.status(200).json({ availableBalance: 0 }); 
          }
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
      updateLatest: async (req, res) => {
        try{
         const update = await MongooseModel.findOneAndUpdate({},req.body, { sort:{ createdAt: -1 }, new: true });
         res.status(200).json(update)
        }
        catch (err){
          console.log(err)

        }
      },
      deleteExpense : async (req, res)=>{
        try {
          const Data = await MongooseModel.deleteOne({_id:req.params.id});
          res.status(200).json(Data)
     
         }
         catch (err){
           console.log(err);
           res.status(500).json(err)
         }
    
       },
       updateOne : async (req, res)=>{
        try{
          const data = await MongooseModel.findOneAndUpdate({_id:req.params.id},req.body);
          res.status(200).json(data);
        }
        catch(err){
          console.log(err);
          res.status(500).json(err);
        }
       }
    
      

}