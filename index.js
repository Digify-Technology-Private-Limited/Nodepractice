const express=require('express');
const test_route=require('./routes/testroute');

const db =require('./database/db');

const app=express();
app.use(express.json());
app.use(test_route);



app.listen(90);