const {Category}=require("../models/index");

const postCategory=async(req,res)=>{
    try{
       
        const response=await Category.create({
            name:req.body.name,description:req.body.description
        })
        return res.status(200).json({
            message:"sucessfully created category",
            data:response

        })

    }
    catch(err){
        return res.status(400).send(err)
    }
}


const getCategory=async(req,res)=>{
    try{
    
        const response=await Category.findAll()
        return res.status(200).json({
            message:"sucessfully created category",
            data:response

        })

    }
    catch(err){
        return res.status(400).send(err)
    }
}


module.exports={
    postCategory,getCategory
}