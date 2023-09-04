require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const db = require('./db/db.js')
const UserRoute = require('./routes/UserRoute.js');
const AuthRouter = require('./routes/AuthRoute.js');
const cookieParser = require("cookie-parser")
const jwt = require('jsonwebtoken');
const EmployeeRouter = require('./routes/EmployeeRoute.js');

app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use(AuthRouter)
app.use(UserRoute)
app.use(EmployeeRouter)

app.listen(PORT, () => { console.log(`Server Listening On Port ${PORT}`) })
