const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {

  try {



    let results = [];
    for (const developer of req.body.developers){

      results.push(await axios.get(`https://api.github.com/users/${developer}`));

    }



   
  

    let out =  results.map( r => ({ name: r.data.name, bio: r.data.bio }));

   

    return res.send(JSON.stringify(out));
    
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
