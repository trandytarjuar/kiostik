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
      "select penulis.* from penulis ;",
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

function delete_penulis(req, res, callback) {
  let id = req.params.id;
  pool.getConnection(function (err, connection) {
    if (err) return callback(err);
    connection.query(
      "delete from penulis where id_penulis = ?;",
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
module.exports.delete_penulis = delete_penulis;

function getById(req, res, callback) {
  let id = req.params.id;
  pool.getConnection(function (err, connection) {
    if (err) return callback(err);
    connection.query(
      "select penulis.* from penulis  where id_penulis = ?;",
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

function addPenulis(req, res, callback) {
  // let id = req.params.id;
  let data = {
    nama_penulis: req.body.nama_penulis,
    create_at: req.body.create_at,
    created_date: req.body.created_date,
    update_at: req.body.update_at,
    update_date: req.body.update_date,
  };
  pool.getConnection(function (err, connection) {
    if (err) return callback(err);
    connection.query(
      "insert into penulis SET  ?;",
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
module.exports.addPenulis = addPenulis;

function editPenulis(req, res, callback) {
    let id = req.params.id;
    console.log(id);
    let data = {
        nama_penulis: req.body.nama_penulis,
        create_at: req.body.create_at,
        created_date: req.body.created_date,
        update_at: req.body.update_at,
        update_date: req.body.update_date,
    };
    pool.getConnection(function (err, connection) {
      if (err) return callback(err);
      connection.query(
        "update penulis SET  ? where id_penulis =? ;",
        [data, id],
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
  module.exports.editPenulis = editPenulis;
