const express = require('express')
const {sendData , reciveData , deleteData } = require('../controllers/controller')

const router = express.Router();

router.route("/api").get(reciveData);

router.route("/api").post(sendData);

router.route("/api/:id").delete(deleteData);

module.exports = router ;