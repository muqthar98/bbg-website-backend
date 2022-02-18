const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")
const Connection = require("./database/db")
const userRoute = require("./routes/routes")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use("/api/user", userRoute);

Connection();

app.get("/", (req,res)=>{
    res.send("Server is running")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
