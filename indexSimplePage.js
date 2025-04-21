const express = require("express");
const app = express();

//get provide the routes
app.get("", (req, res) => {
  // ex.:-http://localhost:5000/?name=sarwan
  let name = req.query.name;
  // you want to show any data help of send function
  res.send(`<h1>hello ${name}. this is my express home page </h1>
        <a href="/">go to about home</a> <br/>
        <a href="/about">go to about page</a><br/>
        <a href="/help">go to about help</a><br/>
        <a href="/json">go to about json</a><br/>
        
                `);
});
app.get("/about", (req, res) => {
  res.send(`
        <h1>hello this is my express about page</h1>
        <a href="/">go to about home</a> <br/>
        <a href="/about">go to about page</a><br/>
        <a href="/help">go to about help</a><br/>
        <a href="/json">go to about json</a><br/>
        
        `);
});
app.get("/help", (req, res) => {
  res.send(`
        <h1>hello this is my express help page</h1>
      <a href="/">go to about home</a> <br/>
        <a href="/about">go to about page</a><br/>
        <a href="/help">go to about help</a><br/>
        <a href="/json">go to about json</a><br/>
        
        `);
});
app.get("/json", (req, res) => {
  res.send([
    { name: "sarwan", lastname: "kumar", email: "sarwan@yahoo.com" },
    { name: "tapes", lastname: "saxena", email: "tapes@yahoo.com" },
  ]);
});
app.listen(5000); //run your server
