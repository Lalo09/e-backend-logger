const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Acceso no autorizado' });
    }

    jwt.verify(token, 'clave_secreta_123', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token inválido.','error':err });
      }
  
      req.user = decoded;
      next();
    });
 }

 module.exports = verifyToken;