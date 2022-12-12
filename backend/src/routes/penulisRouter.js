const penulis = require('../controller/penulisController');
var router = function (app){
    app.get('/penulis', function(req, res){
        penulis.getAll(req, res, function(result){
                   res.json(result);
              });
     });
}
module.exports = router