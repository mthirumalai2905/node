const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('server running on port 8000');
    
    // fs.readFile('info.txt', function(err, data){
    //     if (err) {
    //         console.error(err);
    //         res.writeHead(500, {'Content-Type': 'text/plain'});
    //         res.end('Internal Server Error');
    //         return;
    //     }
    //     res.writeHead(200, {'Content-Type': 'text/plain'});
    //     res.end(data.toLocaleString());
    // });

    // const rstream = fs.createReadStream('info.txt');
    
    // rstream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    // })
    // rstream.on('end', () => {
    //     res.end();
    // })
    // rstream.on('error', (err) => {
    //     console.log(err);
    //     res.end("File not found");
    // })

    // Third method

    const rstream = fs.createReadStream('info.txt');
    rstream.pipe(res);


});

server.listen(8000);
