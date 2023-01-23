const express=require("express");
const PORT=7000;
const bodyParser=require("body-parser")
const app=express();
const cors=require("cors")
const { sequelize } = require("./models/index");
app.use(bodyParser.urlencoded({extended:true}))

const categoryRoutes=require("./routes/category.routes");
const subcategoryRoutes=require("./routes/subCategory.routes");

app.use(cors())
app.use(express.json())

categoryRoutes(app)
subcategoryRoutes(app)




app.listen(PORT,async()=>{
    await sequelize.sync()

    console.log(`listening to the ${PORT}`)
})