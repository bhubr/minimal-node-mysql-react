const mysql = require("mysql2");
const { promisify } = require("util");
const { db: dbSettings } = require("./settings");

const pool = mysql.createPool(dbSettings);
const query = promisify(pool.query).bind(pool);

module.exports = query;
