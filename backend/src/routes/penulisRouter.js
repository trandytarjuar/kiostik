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
    app.get('/penulis/:id', function(req, res){
        penulis.getById(req, res, function(result){
                   res.json(result);
              });
     });
    app.post('/penulis', function(req, res){
        penulis.addPenulis(req, res, function(result){
                   res.json(result);
              });
     });
    app.put('/penulis/:id', function(req, res){
        penulis.editPenulis(req, res, function(result){
                   res.json(result);
              });
     });
}
module.exports = router