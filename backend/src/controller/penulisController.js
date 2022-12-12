const config = require("../config/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});
function getAll(req,res, callback){
    pool.getConnection(function(err,connection){
        if (err) return callback(err);
        connection.query(
            'select judul,penulis.nama_penulis from penulis inner join buku on penulis.id_buku = buku.id_buku;',
            function(error,results){
                if(error) return callback(error);
                return callback({
                    success: true,
                    message : 'berhasil mengambil data',
                    data: results
                });
            }
        );
        connection.release();
    })
}
module.exports.getAll = getAll;

function delete_penulis(req,res, callback){
    let id = req.params.id;
    pool.getConnection(function(err,connection){
        if (err) return callback(err);
        connection.query(
            'delete from penulis where id_penulis = ?;',[id],
            function(error,results){
                if(error) return callback(error);
                return callback({
                    success: true,
                    message : 'berhasil mengambil data',
                    data: results
                });
            }
        );
        connection.release();
    })
}
module.exports.delete_penulis = delete_penulis;