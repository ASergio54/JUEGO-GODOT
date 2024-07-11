// server.js
const http = require('http');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');

// Configurar cabeceras necesarias
const headers = {
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin'
};

// Configurar servidor estático
const serve = serveStatic('.', {
  setHeaders: (res, path, stat) => {
    Object.entries(headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
  }
});

// Crear servidor
const server = http.createServer((req, res) => {
  const done = finalhandler(req, res);
  serve(req, res, done);
});

// Escuchar en el puerto 8000
server.listen(8000, () => {
  console.log('Servidor corriendo en http://localhost:8000');
});
