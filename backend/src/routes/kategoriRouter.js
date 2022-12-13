const kategori = require('../controller/kategoryController');
var router = function (app){
    app.get('/ketegori', function(req, res){
        kategori.getAll(req, res, function(result){
                   res.json(result);
              });
     });
    app.get('/ketegori/:id', function(req, res){
        kategori.getById(req, res, function(result){
                   res.json(result);
              });
     });
    app.delete('/ketegori/:id', function(req, res){
        kategori.deletekategori(req, res, function(result){
                   res.json(result);
              });
     });
    app.post('/ketegori', function(req, res){
        kategori.addKategori(req, res, function(result){
                   res.json(result);
              });
     });
}
module.exports = router