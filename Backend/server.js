const express =require('express')
require('./config.js')
const app =express();
const cors =require('cors')
const UserSehema =require('./schema.js')
app.use(express.json())
app.use(cors())
const port =3330;

app.post('/make_request',async(req,res)=>{
    const data= new UserSehema(req.body);
    const response=await data.save()
    res.send(response);
})

app.listen(port,()=>console.log(`server is running on http://localhost:${port}`))