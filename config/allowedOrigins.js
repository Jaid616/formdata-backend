const dotenv = require("dotenv")

dotenv.config({path: "./config.env"});

const baseurl = process.env.BASEURL;

const allowedOrigins = [
   process.env.BASEURL

]

module.exports = allowedOrigins;