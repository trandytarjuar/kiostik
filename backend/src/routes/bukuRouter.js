const buku = require('../controller/bukuController')
var router = function (app) {

 app.get('/buku', function(req, res){
    buku.getAll(req, res, function(result){
			   res.json(result);
		  });
 });
 app.get('/buku/:id', function(req, res){
    buku.getById(req, res, function(result){
			   res.json(result);
		  });
 });
 app.delete('/buku/:id', function(req, res){
    buku.deletebuku(req, res, function(result){
			   res.json(result);
		  });
 });
 app.post('/buku', function(req, res){
    buku.addBuku(req, res, function(result){
			   res.json(result);
		  });
 });
 app.put('/buku/:id', function(req, res){
    buku.editBuku(req, res, function(result){
			   res.json(result);
		  });
 });
}
module.exports = router;

