const config = require("../config/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});
function getpenulis(req, res, callback) {
    pool.getConnection(function (err, connection) {
      if (err) return callback(err);
      connection.query("SELECT judul,penerbit,tahun_penerbit,nama_penulis FROM buku INNER JOIN penulis on buku.id_penulis= penulis.id_penulis;", function (error, results) {
        if (error) return callback(error);
        return callback({
          success: true,
          message: "berhasil mengambil data",
          data: results,
        });
      });
      connection.release();
    });
  }
  module.exports.getpenulis = getpenulis;
