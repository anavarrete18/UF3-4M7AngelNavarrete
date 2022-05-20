
const express = require('express');
const app = express();
const port = 3000;
const { User } = require("./models/");
const { Workers } = require("./models/");

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', isAuthorized, async (req,res) => {
  const users = await User.findAll();
  res.json(users);
  })

app.get('/workers', alert, async (req,res) => {
  const workers = await Workers.findAll();
  res.json(workers);
  })
/*
app.get('/users', (req,res) => {
  res.json([{
    id: 1,
    name: 'User Userson'
  }])
})
*/

app.get("/products", (req,res) => {
  const products = [
  {
    id: 1,
    name: "hammer",
  },
  {
    id: 2,
    name: "screwdriver",
  },
  ,
  {
    id: 3,
    name: "wrench",
  },
 ];

 res.json(products);
});

function isAuthorized(req,res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}
function alert(req,res, next) {
  var d= new Date();
  console.log("S'han demanat els Workers el " + d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear() + " a les " + d.getHours() + ":" +d.getMinutes() )
  next();
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
