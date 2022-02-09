const app = require('./app')
const connectDatabase = require('./config/database')
const dotenv = require('dotenv')

dotenv.config()

//connecting database
connectDatabase()



const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})