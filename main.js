const express = require('express')

const app = express()

app.get('/',(rep,res)=>{
    res.sendFile(__dirname + '/HTML/index.html');
})
app.get('/hello',(rep,res)=>{
    res.sendFile(__dirname + '/HTML/hello.html');
})

const POST = 3000;
app.listen(process.env.POST || POST);
console.log('Sever is running !')