//fix to import dir
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express from "express";
import ApiYoutube from "./Handler-actions/rutas/youtube/Api_youtube.js";
//console.log(ApiYoutube);
const app = express();
//configuracion de encode para jsons y elementos del body por post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//configuracion del acceso al api
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Acpet"
  );
  next();
});
app.use("/youtube", ApiYoutube);
// Iniciar el servidor
app.get("/test", async (req, res) => {
  res.json({ test: "asdasd" });
});
app.post("/status", async (req, res) => {
  res.json({ status: true });
});
app.get("/controller", async (req, res) => {
  let controller = path.join(__dirname, "../", "TesterController.html");
  console.log(controller);
  res.sendFile(controller);
  //TesterController.html/
  //res.json({});
});
// Iniciar el servidor
app.listen(420, () => {
  console.log("Servidor escuchando en el puerto");
});