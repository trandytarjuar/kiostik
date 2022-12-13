const config = require("../config/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});

function getAll(req, res, callback) {
  pool.getConnection(function (err, connection) {
    if (err) return callback(err);
    connection.query(
      "select * from kategori  ;",
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
module.exports.getAll = getAll;

function getById(req, res, callback) {
  let id = req.params.id;
  pool.getConnection(function (err, connection) {
    if (err) return callback(err);
    connection.query(
      "select * from kategori  where id_kategori = ?;",
      [id],
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
module.exports.getById = getById;

function deletekategori(req, res, callback) {
  let id = req.params.id;
  pool.getConnection(function (err, connection) {
    if (err) return callback(err);
    connection.query(
      "delete from kategori where id_kategori = ?;",
      [id],
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
module.exports.deletekategori = deletekategori;

function addKategori(req, res, callback) {
  // let id = req.params.id;
  let data = {
    deskripsi: req.body.deskripsi,
    create_at: req.body.create_at,
    create_date: req.body.create_date,
    update_at: req.body.update_at,
    update_date: req.body.update_date,
  };
  pool.getConnection(function (err, connection) {
    if (err) return callback(err);
    connection.query(
      "insert into kategori SET  ?;",
      [data],
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
module.exports.addKategori = addKategori;
