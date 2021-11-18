import http from "http";

const server = http.createServer((_, res) => {
  const body = "ok\n";
  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "text/plain",
  });
  res.end(body);
});

server.listen(3000);
