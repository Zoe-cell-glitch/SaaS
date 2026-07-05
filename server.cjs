const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 5173;
const ROOT = 'C:\\Users\\admin\\Documents\\迈富时互联网销售\\maifushi-portfolio';
const MIME = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png'};
const server = http.createServer((req, res) => {
  let fp = path.join(ROOT, req.url === '/' ? 'preview.html' : req.url);
  let ext = path.extname(fp);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not Found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});
server.listen(PORT, '0.0.0.0', () => {
  console.log(`READY: http://0.0.0.0:${PORT}/`);
  console.log(`ALSO: http://127.0.0.1:${PORT}/`);
  // Self-test
  http.get(`http://127.0.0.1:${PORT}/`, (res) => {
    let d = ''; res.on('data',c=>d+=c); res.on('end',()=>console.log('SELF-TEST OK:',res.statusCode,d.length+'B'));
  }).on('error',e=>console.log('SELF-TEST FAIL:',e.message));
});
