import { fileURLToPath } from "url";
import express from "express";
import http, { get } from "http";
import { Server as SocketIOServer } from "socket.io";
import * as gestor from "./Handler-actions/Handler-browser.js";
import cors from "cors";
import fs from "fs";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use("/youtube", gestor.youtubeApi);
io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);
  //midell ware
  socket.on("test", async (data, res) => {
    socket.emit("imagenref", "asd")
  });
  gestor.youtubeApi(socket);
  gestor.BrGestor.ScreenService(socket);
  // Manejar la desconexión del socket
  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});
app.post("/status", async (req, res) => {
  res.json({ status: true });
});
// Iniciar el servidor HTTP
const port = 420;
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
