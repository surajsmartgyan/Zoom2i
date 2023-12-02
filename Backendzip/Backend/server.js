const express = require("express")
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const mongoDB = 'mongodb://127.0.0.1/LMS_DB';
mongoose.connect(mongoDB, { useNewUrlParser: true })
.then(()=>{
    console.log(`Database is conect`)
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    })
})
.catch((error)=>{
    console.log(`Database is not connect`);
})

const User = mongoose.model('User',{
    name:String,
    contact:String,
    dob:String,
    address:String,
    email:String,
    password:String
})


app.post('/signup', async (req,res)=>{
    const {name, contact ,dob,address , email , password}=req.body;
    try {
        // const user = await User.findOne({email})
        // if (user.email) {
        //     res.status(400).json({message:"User exit "})
        // }
        const users = new User({name, contact ,dob,address , email , password})
        await users.save()
        res.status(201).json({message:"Save seccessful" , users})

        
    } catch (error) {
        res.status(400).json({message :"Server Error" })
    }
})

//login api 

app.post('/login',async (req,res)=>{
    const{email,password} = req.body;
    try{
    const user = await User.findOne({email})
    if(!user || user.password != password){
         return res.status(401).json({error:"Email Or Password Invailid"})
    }  
    res.status(200).json({message:"login Successfull"})
    }
    catch(error){
        console.error("Error :",error)
    }
})
