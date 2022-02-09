const mongoose = require('mongoose')

const FeaturedSchema = mongoose.Schema({
    desc:{
        type:String,
        required:[true,"yum bichenvv"]
    },
    image:{
        type:String,
        required:true
    },
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

module.exports = mongoose.model("Featured",FeaturedSchema)