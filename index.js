import express from "express"
const app = express();
const PORT = 4000;
import "dotenv/config"
import mongoose from "mongoose";

console.log(process.env.MONGODBURI);
console.log(process.env.MONGODBURI);

 
app.get('/',(req,res) => {
    console.log(req);
    res.send('Hello first Api')
    

})


mongoose
.connect(process.env.MONGODBURI)
.then(() => console.log('Mongodbb connected'))
.catch((err) => console.log(err))



app.listen(PORT,()=> console.log('server is running on PORT' + PORT)
)
