const buku = require('../controller/bykategoriController')
var router = function (app){
    app.get('/bykategori', function(req, res){
        buku.getbyKategori(req, res, function(result){
                   res.json(result);
              });
     });
}
module.exports = router;