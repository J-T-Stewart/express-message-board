var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

/* GET form page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.post('/new', function(req, res) {
  const text = req.body.name;
  const user = req.body.message;
  messages.push({text: text, user: user, added: new Date()});
  res.redirect("/");
});

module.exports = router;
