const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.listen(port, function() {
  console.log(`lsitening to port: ${port}`)
});

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = [];

app.get('/messages', function(req, res, next) {
    res.status(200).json({messages: messages})
})

app.post('/messages', function (req, res, next) {
  console.log(req.body);
  messages.push({ message: req.body.message, time: new Date(), username: req.body.username, image: req.body.image });
  res.status(200).json({messages: messages})
});
