const penulis = require('../controller/penulisController');
var router = function (app){
    app.get('/penulis', function(req, res){
        penulis.getAll(req, res, function(result){
                   res.json(result);
              });
     });
    app.delete('/penulis/:id', function(req, res){
        penulis.delete_penulis(req, res, function(result){
                   res.json(result);
              });
     });
}
module.exports = router