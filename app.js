import express, { response } from "express";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send('İndex Sayfası2');
})
app.listen(port, ()=>{
    console.log(`Application running on port ${port}`)
})