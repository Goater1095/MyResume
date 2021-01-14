const { static } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/software', (req, res) => {
  res.render('index2');
});

app.listen(port, (req, res) => {
  console.log(`Server start on http://localhost:${port}`);
});
