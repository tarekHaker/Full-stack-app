const express = require ("express");
const app = express();
const cors = require ("cors");
const db=require("./data/connect")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 7000;
const routeApp=require("./routes/routes")

app.use(cors());
app.use("/expenses",routeApp)


app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})