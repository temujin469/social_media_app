const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title:{
       type:String,
       required:[true, 'Гарчигаа оруулан уу'],
       maxLength:[200,"Хэтэрхий урт гарчиг байна"] 
    },
    desc:{
        type:String,
        required:[true,"yum bichenvv"]
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    likes:{
        type:Array,
        default:[]
    }
},{timestamps:true})

module.exports = mongoose.model("Post",PostSchema)