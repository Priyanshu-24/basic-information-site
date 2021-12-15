const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {

    if(req.url === "/") {

        fs.readFile("index.html", (err, data) => {
            if(err){
                console.log(`Error: ${err}`);
                return;
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            return res.end();
        });
    }

    else if(req.url === "/about") {

        fs.readFile("about.html", (err, data) => {
            if(err){
                console.log(`Error: ${err}`);
                return;
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            return res.end();
        });
    }

    else if(req.url === "/contact-me") {

        fs.readFile("contact-me.html", (err, data) => {
            if(err){
                console.log(`Error: ${err}`);
                return;
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            return res.end();
        });
    }

    else {

        fs.readFile("404.html", (err, data) => {
            if(err){
                console.log(`Error: ${err}`);
                return;
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            return res.end();
        });
    }
    
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

