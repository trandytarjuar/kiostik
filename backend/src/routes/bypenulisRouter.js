const buku = require('../controller/bypenulisController')
var router = function (app){
    app.get('/bypenulis', function(req, res){
        buku.getpenulis(req, res, function(result){
                   res.json(result);
              });
     });
}
module.exports = router;