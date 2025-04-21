// routing remove the extention of the your file in url
const express=require('express');
const app=express();
// need current application patyh
const path=require('path');
const publicPath=path.join(__dirname,'public')
app.set('view engine', 'ejs')
// console.log(publicPath);
/**
 * app= this app use express exicution function
 * express.static=use in static funciton in express
 */
// use this statis path
// app.use(express.static(publicPath))
/**
 * static data routing
 */
app.get('', (req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/profile', (_,resp)=>{
    resp.render('profile')
})
app.get('/aboutme', (req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/helpme', (req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
// app.get('*',(_,resp)=>{
//     resp.sendFile()
// })

app.listen(5000)
