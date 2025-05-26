const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'todo_app'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
    return;
  }
  console.log('✅ Conexión a MySQL exitosa');
});

module.exports = db;
