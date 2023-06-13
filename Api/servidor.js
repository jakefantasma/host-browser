import express from "express";
import {
  OpenVideoYoutube,
  fullscreen,
  play,
  next,
  cinema,
} from "./Handler-actions/Handler-browser.js";
const app = express();
// Ruta principal
app.get("/v1", async (req, res) => {
  //res.sendFile(__dirname + "/index.html");
  await OpenVideoYoutube("https://www.youtube.com/watch?v=Px3t9vNytqA");
  res.json({ test: "asdasd" });
});
app.get("/v2", async (req, res) => {
  //res.sendFile(__dirname + "/index.html");
  await OpenVideoYoutube("https://www.youtube.com/watch?v=E5r84K95YkA");
  res.json({ test: "asdasd" });
});
app.get("/full", async (req, res) => {
  await fullscreen();
  res.json({ test: "asdasd" });
});
app.get("/play", async (req, res) => {
  await play();
  res.json({ test: "asdasd" });
});
app.get("/next", async (req, res) => {
  await next();
  res.json({ test: "asdasd" });
});
app.get("/cinema", async (req, res) => {
  await cinema();
  res.json({ test: "asdasd" });
});
// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
