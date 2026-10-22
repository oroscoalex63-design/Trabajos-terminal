import app from "./app.js";
import sequelize from './config/database.js';
import './models/index.js';

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log('Base:', sequelize.config.database, '| Puerto:', sequelize.config.port, '| Host:', sequelize.config.host);
    console.log('Conexión a PostgreSQL establecida');
    await sequelize.sync();
    console.log('Tablas sincronizadas');
  app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
} catch (error) {
console.error('No se pudo conectar a la base de datos:', error.message);
process.exit(1);
}
}
iniciarServidor();