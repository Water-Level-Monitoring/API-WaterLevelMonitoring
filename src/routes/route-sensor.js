const router = require("express").Router();
const { sensor } = require("../controllers");


// GET localhost:8080/karyawan => Ambil data semua karyawan
router.get('/sensor', sensor.getDataSensor);

// GET localhost:8080/karyawan => Ambil data terakhir
router.get("/sensor/lastId", sensor.getLastDataSensor);


// POST localhost:8080/karyawan/add => Tambah data karyawan ke database
router.post('/sensor/add', sensor.addDataSensor);

// POST localhost:8080/karyawan/delete => Delete data karyawan
router.post('/sensor/delete/', sensor.deleteDataSensor);



module.exports = router;
