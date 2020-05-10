const express = require("express");
const path = require('path');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Using cors is necessary for passing CORS
var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.use(express.json())


// const dirname = "/Users/chrissy/Documents/GitHub/rate_anything/Front-end"

// app.use(express.static(path.join(__dirname, 'build')))

app.post('/api/login', function (req, res) {
    console.log("reach server")
    var usereml = req.body.email
    if (usereml.includes("@")) {
        console.log("valid")
        res.status(200).send({email: usereml})
    } else {
        res.status(404).send({errMsg: 'Email does not exist.'})
    }
})

app.listen(port, () => console.log(`Exampleeee app listening on port ${port}!`))