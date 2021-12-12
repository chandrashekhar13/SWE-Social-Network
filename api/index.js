const express =  require("express");
const app = express(); 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require('morgan');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();



//midleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts",postRoute);

app.get("/",(req,res) => {
    res.send("Welcome to homepage")
})

const port = process.env.PORT || 8000
const start = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,
            console.log("Conntected to MongoDB"),{})
            app.listen(port,console.log(`server listening to port ${port}`))
    }catch (error) {
        console.log(error)
    }
}
start();
// app.listen(8800,() =>{
//     console.log("Backend sever is running")
// })