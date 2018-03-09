var PORT = 30000;

var net = require('net');
var server = net.createServer(function(c) { //'connection' listener

    console.log('client connected');

    c.on('end', function() {
      console.log('client disconnected');
    });

    c.on('data',function(data){
	console.log(data);
	c.write(new Buffer([0x01,0x02,0x03]));
    });

    c.write('>>hello\r\n');
});
server.listen(PORT, function() { //'listening' listener
  console.log('server bound to :'+ PORT);
});



