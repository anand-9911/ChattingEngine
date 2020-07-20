const express = require('express');
const connectDB = require('./config/db');

const app = express();
const server = require('http').Server(app);
const io = (module.exports.io = require('socket.io')(server));

const PORT2 = process.env.PORT || 3231;
const PORT = process.env.PORT || 5000;

const SocketManager = require('./SocketManager');
io.on('connection', SocketManager);

server.listen(PORT2, () => {
  console.log('Connected to port:' + PORT2);
});

connectDB();
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api/user', require('./routes/api/user'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
