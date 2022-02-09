const mongoose = require('mongoose')

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>{ 
        console.log('DB has connected')
    })
}

module.exports = connectDatabase;