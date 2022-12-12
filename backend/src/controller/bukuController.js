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
                'select * from buku;',
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

function getById(req,res, callback){
    let id = req.params.id;
        pool.getConnection(function(err,connection){
            if (err) return callback(err);
            connection.query(
                'select * from buku where id_buku = ?;',[id],
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
module.exports.getById = getById;

function deletebuku(req,res, callback){
    let id = req.params.id;
        pool.getConnection(function(err,connection){
            if (err) return callback(err);
            connection.query(
                'delete from buku where id_buku = ?;',[id],
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
module.exports.deletebuku = deletebuku;

function addBuku(req,res, callback){
    // let id = req.params.id;
    let data = {
        judul :req.body.judul,
        penerbit : req.body.penerbit,
        tahun_penerbit : req.body.tahun_penerbit,
        stock : req.body.stock
    }
        pool.getConnection(function(err,connection){
            if (err) return callback(err);
            connection.query(
                'insert into buku SET  ?;',[data],
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
module.exports.addBuku = addBuku;

function editBuku(req,res, callback){
    let id = req.params.id;
    let data = {
        judul :req.body.judul,
        penerbit : req.body.penerbit,
        tahun_penerbit : req.body.tahun_penerbit,
        stock : req.body.stock
    }
        pool.getConnection(function(err,connection){
            if (err) return callback(err);
            connection.query(
                'update buku SET  ? where id_buku ;',[data,id],
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
module.exports.editBuku = editBuku;


