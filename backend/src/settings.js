const dotenv = require("dotenv");

dotenv.config();

const db = {
  host: process.env.DB_HOST ?? "localhost",
  port: process.env.DB_PORT ?? 3306,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const obfuscateEnd = (str, obfuscateFrom = 4) =>
  str.slice(0, obfuscateFrom) + "*".repeat(str.length - obfuscateFrom);

// dump host, port, db, user, obfuscated password
// as a connection string
console.log(
  `mysql://${db.user}:${obfuscateEnd(db.password)}@${db.host}:${db.port}/${
    db.database
  }`
);

module.exports = {
  db,
  port: process.env.PORT ?? 3000,
};
