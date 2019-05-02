var express = require('express');

var app = express();

app.use(express.static('views/assets'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5000, () => {
  console.log('server starting at port : 5000');
});