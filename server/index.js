const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();

app.listen(4000,()=> {
    console.log("server started on port 4000")
})

mongoose.connect("mongodb://localhost:27017/luba",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("db connection successfull")
}).catch(err=>{
    console.log(err.message)
})

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
}))

app.use(express.json())
