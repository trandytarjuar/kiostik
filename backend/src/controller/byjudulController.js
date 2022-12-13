const config = require("../config/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});
function getJudul(req, res, callback) {
  pool.getConnection(function (err, connection) {
    if (err) return callback(err);
    connection.query(
      "select * from buku group by judul;",
      function (error, results) {
        if (error) return callback(error);
        return callback({
          success: true,
          message: "berhasil mengambil data",
          data: results,
        });
      }
    );
    connection.release();
  });
}
module.exports.getJudul = getJudul;
