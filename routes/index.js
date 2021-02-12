var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products =[{
    mobile:'oneplus',
    image:'data:image/jpeg;base64,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',
    description:'world famous phone',

  },
  {
    mobile:'iphone',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67YJgkBR20zPyM3f6wulcg18E1ztZvIJ4p6DTaQlmZzDmQTQ4BQnCOtS4KSoOQHa_Vwx4PuSB&usqp=CAc',
    description:'world famous phone',

  },
  {
    mobile:'samsung',
    image:'data:image/jpeg;base64,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',
    description:'world famous phone',

  },
  {
    mobile:'redmi',
    image:'data:image/jpeg;base64,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',
    description:'world famous phone',

  }]
 

  res.render('index', {products,admin:false});
});

module.exports = router;
