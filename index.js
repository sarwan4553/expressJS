// const express=require('express');
// const app=express();
// // need current application patyh
// const path=require('path');
// const publicPath=path.join(__dirname,'public')
// // console.log(publicPath);
// app.use(express.static(publicPath))
// app.listen(5000)


const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});