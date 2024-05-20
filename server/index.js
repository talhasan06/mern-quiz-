const express = require('express')
const cors = require('cors');
const app =express()
require('dotenv').config();

app.use(express.json())
app.use(cors());

const dbConfig = require('./config/dbConfig')

const usersRoute = require('./routes/userRoutes')
const examsRoute = require("./routes/examRoutes");
const reportsRoute = require("./routes/reportRoute");

const port = process.env.port || 5000

app.use('/api/users',usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", reportsRoute);

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})