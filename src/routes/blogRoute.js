const express = require("express");
const blog_router = express.Router();
const BlogModel = require("../models/blogModel");

blog_router.post("/api/v1/posts",async(req,res)=>{
    try{
        const user = await BlogModel.create({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            user:req.user
        });
        res.status(200).json({
            status:"success",
            user
        })
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
});

blog_router.get("/api/v1/posts",async(req,res)=>{
    try{
        const users = await BlogModel.find({user:req.user});
        if(users.length){
            res.status(200).json({
                status:"success",
                users
            })
        }
        else{
            res.status(404).json({
                status:"failed",
                message:"page not found"
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

module.exports = blog_router;