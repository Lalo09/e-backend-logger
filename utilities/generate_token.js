/** Generar un token para prueba de backend, ejecutar: node generate_token.js */

const jwt = require('jsonwebtoken');

const userData = {
  userId: 123,
  username: 'usuario_prueba'
};

const secretKey = 'clave_secreta_123';

const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });

console.log('Token JWT válido:');
console.log(token);