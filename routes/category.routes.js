const controller=require("../controller/category.controller")
const Routes=(app)=>{
    app.post('/terrakart/api/v1/postcategory',controller.postCategory)
    app.get('/terrakart/api/v1/getdata',controller.getCategory)


}

module.exports=Routes