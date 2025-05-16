const express = require("express");
const { connectDB } = require("./db");
const mainRouter = require("./routes/index");
const cors = require('cors')


const app = express();

app.use(cors());
app.use(express.json())

connectDB();



app.use('/api/v1/', mainRouter)

app.listen(3000, () => {
    console.log("http://localhost:3000")
})