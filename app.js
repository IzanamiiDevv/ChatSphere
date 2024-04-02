const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const PORT = 3000;
const app = express();
const sql = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:"test",
    database:"test"
});

app.use(cors({
    origin:"*"
}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send(JSON.stringify({
        data:"Hello"
    }));
});

app.listen(PORT,()=>{
    console.log("Ready");
});