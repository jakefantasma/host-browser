import { getContext, sleep } from "../Contexto/Context.js";
await sleep(1000 * 5); //fix para poder cargar el navegador <-
export async function OpenVideoYoutube(url) {
  let contexto = getContext();
  console.log(contexto);
  let page = contexto.currentPage;
  await page.goto(url, {
    waitUntil: "networkidle0",
  });
  await page.waitForSelector("button.ytp-large-play-button");
  await page.click("button.ytp-fullscreen-button"); 
}
