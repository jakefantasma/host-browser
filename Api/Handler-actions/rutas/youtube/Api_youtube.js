import { youtube } from "../../Handler-browser.js";
function ActionYoutube(socket) {
  socket.on("v1", async (req, res) => {
    let video = req.video;
    await youtube.OpenVideoYoutube(video);
    //res.json({ test: "asdasd" });
  });
  socket.on("full", async (req, res) => {
    await youtube.fullscreen();
  });
  socket.on("play", async (req, res) => {
    await youtube.play();
  });
  socket.on("next", async (req, res) => {
    await youtube.next();
  });
  socket.on("cinema", async (req, res) => {
    await youtube.cinema();
  });
}
export default ActionYoutube;
