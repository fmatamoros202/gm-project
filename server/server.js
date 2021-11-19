const express = require('express');
const app = express();
const cors = require('cors');
const users = require("./routes/users.js");


app.use(express.json());
app.use(cors());



app.use("/api", users);

app.listen('8080',()=>{
    console.log('Listening port 8080');
});