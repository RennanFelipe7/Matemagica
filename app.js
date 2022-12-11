const express = require('express');
const { engine } = require ('express-handlebars');
const app = express();
app.use(express.static(__dirname + '/views'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/Matemagica', function(req, res) {
  res.render('Matemagica')
});


PORT = process.env.PORT || 8085
app.listen(PORT, () => {

})  