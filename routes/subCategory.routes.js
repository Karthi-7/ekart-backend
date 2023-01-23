const controller=require("../controller/subCategory.controller")
const Routes=(app)=>{
    app.post('/terrakart/api/v1/postsubategory',controller.postsubCategory)
    app.get('/terrakart/api/v1/getdata/subcategory',controller.getsubCategory)


}

module.exports=Routes