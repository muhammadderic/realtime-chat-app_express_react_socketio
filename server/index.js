const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "localhost:3000",
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
  console.log("A user has connected");

  // Handle any disconnect events
  socket.on("disconnect", () => {
    console.log("A user has left");
  })
})

// Listen to server
httpServer.listen(5000, () => {
  console.log("Server is listening");
})