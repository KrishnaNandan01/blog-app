const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const register_router = require("./routes/registerRoute");
const blog_router = require("./routes/blogRoute");
const port = process.env.PORT ||4000

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL,()=>{
    console.log("connected to databases");
});

app.use("/api/v1/posts",(req,res,next)=>{
    try{
//console.log(req.header);
        const token = req.headers.authorization;
        if(token){
            const decoded = jwt.verify(token, 'secret');
            //console.log(decoded);
            req.user = decoded.data;
            next();
        }
        else{
            res.status(401).json({
                status:"failed",
                message:"token are missing"
            })
        }
         
    }
    catch(e){
        res.status(401).json({
            status:"failed",
            message:e.message
        })
    }
})

app.use("/",register_router);
app.use("/",blog_router)


app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})