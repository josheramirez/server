const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = SocketIO.listen(server);

//permite rutear a carpetas y archivos que usare (permite usar la carpeta public)
app.use(express.static('public'));

//app.set("view engine", "jade");


app.get("/",function(req,res){
	//console.log("sesion: "+req.session.user_id);
	res.sendFile(__dirname+"index.html")
});


//app.use(express.static(__dirname + '/public'));
server.listen(3000, () => console.log('server on port 3000'));

const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;

const port = new SerialPort("COM6", {
  baudRate: 9600
});
const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }));


io.on("connection",function(){
	 console.log('usuario conectado');
});

parser.on('open', function () {
  console.log('connection is opened');
});

parser.on('data', function (data) {
  let temp = parseInt(data, 10) + " °C";
  console.log(temp);
  io.emit('temp', data.toString());
});

parser.on('error', (err) => console.log(err));
port.on('error', (err) => console.log(err));
