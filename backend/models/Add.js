const mongoose = require('mongoose')

const AddSchema = mongoose.Schema({
    title:{
       type:String,
       required:[true, 'Гарчигаа оруулан уу'],
       maxLength:[200,"Хэтэрхий урт гарчиг байна"] 
    },
    desc:{
        type:String,
        required:[true,"yum bichenvv"]
    },
    image:{
        type:"String",
    }
},{timestamps:true})

module.exports = mongoose.model("Add",AddSchema)