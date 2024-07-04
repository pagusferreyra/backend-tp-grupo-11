const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "mysql-turnosgs.alwaysdata.net",
  user: process.env.DB_USER || "turnosgs",
  password: process.env.DB_PASSWORD || "Grupo11",
  database: process.env.DB_NAME || "turnosgs_grupo11",
});

connection.connect((error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Conectado a la base de datos");
});

module.exports = connection;