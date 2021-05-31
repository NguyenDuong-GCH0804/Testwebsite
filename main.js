const express = require('express')

const app = express()

app.get('/',(rep,res)=>{
    res.sendFile(__dirname + '/HTML/index.html');
})
app.get('/hello',(rep,res)=>{
    res.sendFile(__dirname + '/HTML/hello.html');
})

const PORT = 3000;
app.listen(process.env.PORT || PORT);
console.log('Sever is running !')