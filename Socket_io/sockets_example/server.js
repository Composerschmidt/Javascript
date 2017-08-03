let express = require('express');

let app = express();

let path = require('path');

app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

let server = app.listen(6789, () => console.log("The Server is listenig on 6789."));

let io = require('socket.io').listen(server);

var count = 0;

io.on('connection', (socket) => {
  console.log("User is connected. ID:", socket.id);
  // Sending the new client a welcome message.
  socket.emit('welcome', {message: "Welcome to The Button Game"});
  // Sending the new client the current count:
  socket.emit('update_count', {current: count});

  // listening for the button to be click and updates the full broadcast count.
  socket.on('button_clicked', () => {
    count++;
    io.emit('update_count', {current: count});
  });
  // listening for the reset button to reset the count.
  socket.on('reset_count', () => {
    count = 0;
    io.emit('update_count', {current: count})
  });
  // This will console in the terminal/console when a user has disconnected. 
  socket.on('disconnect', () => {
      console.log("User disconnected. ID:", socket.id);
  });

})
