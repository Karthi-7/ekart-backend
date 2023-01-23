
const {Subcategory,Category}=require("../models/index");

const postsubCategory=async(req,res)=>{
    try{
       
        const response=await Subcategory.create({
            name:req.body.name,
            description:req.body.description,
            cost:req.body.cost,
            categoryId:req.body.categoryId
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


const getsubCategory=async(req,res)=>{
    try{
    
        const response=await Subcategory.findAll({include:Category})
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
    postsubCategory,getsubCategory
}