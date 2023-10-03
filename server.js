const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  const url = req.url;

  if (url === '/') {
    res.writeHead(200);
    res.end('<h1>Página Inicial</h1><a href="/sobre">Ir para a página Sobre</a>');
  } else if (url === '/sobre') {
    fs.readFile('sobre.txt', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('404 - Página não encontrada');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('404 - Página não encontrada');
  }
});

server.listen(8000, () => {
  console.log('Servidor rodando na porta 8000');
});
