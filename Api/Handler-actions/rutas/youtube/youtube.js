import { getContext, sleep } from "../../Contexto/Context.js";
await sleep(1000 * 5); //fix para poder cargar el navegador <-
//otra manera para cargar el video seria cambiando directamente el
//identificador del video insertado
export async function OpenVideoYoutube(url) {
  let contexto = getContext();
  console.log(contexto);
  let page = contexto.currentPage;
  await page.goto(url, {
    waitUntil: "networkidle0",
  });
  //await fullscreen();
}
//controles para el video
export async function play() {
  let page = getContext().currentPage;
  await page.keyboard.press("k");
}
export async function pause() {
  await play();
}
export async function next() {
  let page = getContext().currentPage;
  const keyboard = page.keyboard;
  await keyboard.down("Shift");
  await keyboard.press("KeyN");
  await keyboard.up("KeyN");
  await keyboard.up("Shift");
  await page.waitForTimeout(3000);
}
export async function fullscreen() {
  let page = getContext().currentPage;
  await page.keyboard.press("f");
}

export async function cinema() {
  let page = getContext().currentPage;
  await page.keyboard.press("t");
}
