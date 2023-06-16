import express from "express";
import { youtube } from "../../Handler-browser.js";
const ruta = express.Router();
// Ruta principal
let tipo = "post"; //defino tipo de ruta
ruta[tipo]("/v1", async (req, res) => {
  console.log(req.body.url);
  //res.sendFile(__dirname + "/index.html");
  await youtube.OpenVideoYoutube(req.body.url);
  res.json({ test: "asdasd" });
});
ruta[tipo]("/full", async (req, res) => {
  await youtube.fullscreen();
  res.json({ test: "asdasd" });
});
ruta[tipo]("/play", async (req, res) => {
  await youtube.play();
  res.json({ test: "asdasd" });
});
ruta[tipo]("/next", async (req, res) => {
  await youtube.next();
  res.json({ test: "asdasd" });
});
ruta[tipo]("/cinema", async (req, res) => {
  await youtube.cinema();
  res.json({ test: "asdasd" });
});
export default ruta;
