var http = require('http');
var port = process.env.PORT || 3000;

//create a server object:
http.createServer(async function (req, res) {

    const buffers = [];

    for await (const chunk of req) {
        buffers.push(chunk);
    }

    const data = Buffer.concat(buffers).toString();

    console.log(JSON.parse(data).todo);

    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(port); //the server object listens on port 8080