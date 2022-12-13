const buku = require('../controller/byjudulController')
var router = function (app){
    app.get('/byjudul', function(req, res){
        buku.getJudul(req, res, function(result){
                   res.json(result);
              });
     });
}
module.exports = router;