var express = require('express');
var tcpp = require('tcp-ping');

var app = express();

const port = process.env.PORT || 1337;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ping/:ipaddress/port/:port', function(req, res, next) {
    
    var host = req.params.ipaddress;
    var port = req.params.port;
    
    var options = {
        address: host,
        port: port
    }

    tcpp.ping(options, function(err, data) {
        console.log(data);
        res.json(data);
    });
    
});
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})