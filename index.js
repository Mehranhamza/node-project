const express = require('express');
const app = express();
app.get('/home',(req,resp)=>{
resp.send('Its working');
});
app.listen(3000);