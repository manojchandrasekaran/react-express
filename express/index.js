import  express from "express";
import myrouter from "./myrouter.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
// app.get("/",(req,res)=>{
//     res.send("Express application").sendStatus(200);
// });
app.use(cors());
app.use("/",myrouter);

// app.get("/books",(req,res)=>{
//     res.send({"name":"maanoj"})
// })

app.listen(port,()=>{
    console.log(`App is running in port ${port}`);
});