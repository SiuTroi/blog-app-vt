const  express = require("express");
const  bodyParser = require("body-parser");
const  cors = require("cors")
const  posts = require("./routers/posts")
const mongoose = require("mongoose")
const dotenv  = require("dotenv");

dotenv.config();

const app = express()
const PORT = process.env.HORT || 5000;

const URI = process.env.DATABASE_URL
// Nếu không có route nào đứng trước thì sẽ vào các use bên dưới
app.use(bodyParser.json({ limit: "30mb"}))
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb"}))
app.use(cors())

// Routers
app.use("/posts", posts)



// Connect to DB
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conncet to DB successfully!!")
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })