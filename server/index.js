const express = require('express');;
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
const users = [
    {id:1,name:'Mridul',profession:'student',email:"mridul@gmail.com"},
    {id:2,name:'Nasim',profession:'student',email:"nasim@gmail.com"},
    {id:3,name:'Rakib',profession:'student',email:"rakib@gmail.com"}
]
app.get('/',(req,res)=>{
    res.send("LA MRIDUL");
})
app.get('/users',(req,res)=>{
    res.send(users);
})
app.post("/users",(req,res)=>{
    console.log("api hitting");
    console.log(req.body);
})
app.listen(port,()=>{
    console.log("listening from: ",port);
})