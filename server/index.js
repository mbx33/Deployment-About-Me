const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('client'))


//This is used when deploying an app 
app.get('/', function (req, res ) {
    res.sendFile(path.join(__dirname, '../client/index.html'))
});


const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Ya Rabotayu on ${port}`)
});