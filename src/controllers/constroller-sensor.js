const config = require("../configs/database");
const mysql = require("mysql2");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});


module.exports = {
  // Ambil data semua karyawan
  getDataSensor(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM sensor;
                `,
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil ambil data!",
            data: results,
          });
        }
      );
      connection.release();
    });
  },

  // menampilkan data terakhir
  getLastDataSensor(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM sensor ORDER BY id DESC LIMIT 1;
                `,

        function (error, results) {
          console.log(results);
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil ambil data!",
            data: results,
          });
        }
      );
      connection.release();
    });
  },

  // Simpan data karyawan
  addDataSensor(req, res) {
    var dt = require("moment")().format("YYYY-MM-DD T00:00:00.000Z"); 
    let data = {
      sensor1: req.body.sensor1,
      sensor2: req.body.sensor2,
      waterpump1: req.body.waterpump1,
      waterpump2: req.body.waterpump2,
      waktu: dt,
    };
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      console.log(data);
      connection.query(
        `
                INSERT INTO sensor SET ?;
                `,
        [data],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil tambah data!",
          });
        }
      );
      connection.release();
    });
  },
  
  // Delete data karyawan
  deleteDataSensor(req, res) {
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                DELETE FROM sensor WHERE id = ?;
                `,
        [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil hapus data!",
          });
        }
      );
      connection.release();
    });
  },
};