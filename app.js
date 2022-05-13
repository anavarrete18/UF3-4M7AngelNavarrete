
const express = require('express');
const app = express();
const port = 3000;
const { User } = require("./models");

app.get('/', (req, res) => res.send('Hello World!'));



app.get('/users', isAuthorized, async (req,res) => {
  const users = await User.findAll();
  res.json(users);
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
