import { fileURLToPath } from "url";
import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import * as gestor from "./Handler-actions/Handler-browser.js";
import cors from "cors";

import fs from "fs";
import path from "path";
import ActionYoutube from "./Handler-actions/rutas/youtube/Api_youtube.js";
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
  ActionYoutube(socket); //midell ware
  socket.on("ver", () => {
    console.log("recibiendo accion");
    //socket.emit("mensaje", "testaa1111");
    shareImage();
  });
  function shareImage() {
    const imagePath = path.join(__dirname, "imagen.jpg");
    console.log(imagePath);
    fs.readFile(imagePath, { encoding: "base64" }, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      // Enviar la imagen en formato Base64 al cliente
      socket.emit("image", data);
      console.log("enviado");
    });
  }
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
