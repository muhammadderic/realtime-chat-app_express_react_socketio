const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const { addUser } = require("./controllers/userController");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  }
})

// Middleware
app.use(cors());

// Routes
app.use("/", (req, res) => {
  res.send("Hello Deric");
})

// SocketIO connection
io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", { user: "admin", text: `${user.name}, welcome to the room ${user.room}` });
    socket.broadcast.to(user.room).emit("message", { user: "admin", text: `${user.name} has joined!` });

    callback();
  })

  // Handle any disconnect events
  socket.on("disconnect", () => {
    console.log("A user has left");
  })
})

// Listen to server
httpServer.listen(5000, () => {
  console.log("Server is listening");
})