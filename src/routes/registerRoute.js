const express = require("express");
const register_router = express.Router();
const registerModel = require("../models/registerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register_router.get("/v1/register",(req,res)=>{
//     res.send("ok");
// })

register_router.post("/api/v1/register",async(req,res)=>{
    try {
        const isAvailable = await registerModel.findOne({ email: req.body.email });
        if (isAvailable) {
            res.json({
                status: "failed",
                message: "user already exists"
            })
        }
        else {
            bcrypt.hash(req.body.password, 10, async function (err, hash) {
                if (!err) {
                    try {
                        const user = await registerModel.create({
                            email: req.body.email,
                            password: hash,
                        });

                        res.json({
                            status: "succes",
                            user
                        })

                    }
                    catch(e){
                        res.status(401).json({
                            status:"failed",
                            message:e.message
                        })
                    }
                }
            });

        }

    } catch (e) {
        res.status(401).json({
            status: "failed",
            message: e.message
        })
    }
});

register_router.post("/api/v1/login",async(req,res)=>{
    try{

        const user = await registerModel.findOne({email:req.body.email});
    if(user){
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if(result){
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: user._id
                  }, 'secret');
                res.status(200).json({
                    status:"login succesfully",
                    token
                })
            }
            else{
                res.status(404).json({
                    status:"failed",
                    message:"password does not match"
                })
            }
        });
    }
    else{
        res.status(404).json({
            status:"failed",
            message:"user does not available"
        })
    }

    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
    
})

module.exports = register_router;