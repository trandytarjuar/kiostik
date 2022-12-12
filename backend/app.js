const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const appRoute = require('./src/routes/bukuRouter');
// app.use('/buku', appRoute);
require('./src/routes/bukuRouter')(app);
require('./src/routes/penulisRouter')(app);

app.listen(8080, ()=>{
    console.log('Server Berjalan di Port : 8080');
});