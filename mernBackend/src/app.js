const express = require("express")
const path = require("path");
const app = express();
const hbs = require("hbs");
// const express = require("express")

//Making connection with database;
const mongoose = require("mongoose");
const { cp } = require("fs");
mongoose.connect("mongodb://localhost:27017/Bhangarwala",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("successfully")
    }
})

// app.listen(4000,()=>{
//     console.log("on port 4000 !!!");
// })

//require("./src/db/conn.js");
const UserSignup= require("./models/registers");
const GetOrder= require("./models/Order");
const contactus= require("./models/contact");

const port = 8000;


  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enable
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path= path.join(__dirname,"../templates/partials");

app.use(express.static(static_path))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//setting hbs file 
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path)

app.get("/",(req, res)=>{
    res.render("index");
});
app.get("/contact",(req, res)=>{
    res.render("contact");
});
app.get("/sellscrap",(req,res)=>{
    res.render("sellscrap");
});
app.get("/about",(req, res)=>{
    res.render("about");
});
app.get("/scrapPrice",(req, res)=>{
    res.render("scrapPrice");
});
app.get("/register",(req, res)=>{
    res.render("register");
});
app.get("/login",(req, res)=>{
    res.render("login");
});
app.get("/Calculator",(req, res)=>{
    res.render("Calculator");
});

app.post("/register",async (req, res)=>{
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){
            const signupbhangarvala = new UserSignup({
                name: req.body.name,
                email: req.body.email,
                gender: req.body.gender,
                zonecode: req.body.zonecode,
                mobile:req.body.mobilenumber,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword
            })

           const signups= signupbhangarvala.save();
           res.status(201).render("index");
        }
        else{
            res.send("password are not matching");
        }
        
        
    } catch (error) {
        res.status(400).send(error);
    }
});

// login check
app.post("/login" ,async (req,res)=>{
    try {
        const mobile= req.body.mobilenumber;
        const password = req.body.password;  
        // console.log(`email is ${mobile} and ${password}`)
       const usernumber = await UserSignup.findOne({mobile:mobile})
        if(usernumber.password === password){
       res.status(201).render("index");
        }
        else{
            res.send("password or email are incorrect")
        }

    } catch (error) {
        res.status(400).send("invalid number or password")
    }
})
app.post("/sellscrap",async (req,res)=>{
    try {
        const orderbhangarvala= new GetOrder({
            name: req.body.name,
            email: req.body.email,
            mobile:req.body.mobilenumber,
            zonecode: req.body.zonecode,
            address:req.body.address,
            street:req.body.street,
            city:req.body.city
        })
        const orders = orderbhangarvala.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error);
    }
});
app.post("/contact",async (req,res)=>{
    try {
        const contactus= new contactus({
            name: req.body.name,
            email: req.body.email,
            mobile:req.body.phone,
            message:req.body.text
        })
        const cont = contactus.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})