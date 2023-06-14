import puppeteer from "puppeteer";
import path from "path";

const screenSize = {
  windows: { w: 1920, h: 1080 },
  viewport: { w: 1920, h: 1080 },
};

//todo es necesario un meotdo para guaradar las credenciales al cerrar
//todo es necesario un metodo para cargar la configuracion del sitio
const contexto = {
  br: null,
  currentPage: null,
};

async function InitBrowser() {
  contexto.br = await puppeteer.launch({
    headless: false,
    executablePath: "brave/brave.exe",
    userDataDir: "./session",
    args: [
      "--window-position=2850,500",
      `--window-size=${screenSize.windows.w},${screenSize.windows.h}`,
      "--start-fullscreen",
      "--no-default-browser-check",
    ],
    ignoreDefaultArgs: [
      "--enable-automation",
      "--disable-default-browser-check",
    ],
  });
  contexto.currentPage = await contexto.br.newPage();
  await contexto.currentPage.setViewport({
    width: screenSize.viewport.w,
    height: screenSize.viewport.h,
  });
}
(async function () {
  if (contexto.br == null) {
    await InitBrowser();
  }
})();
export function getBrowser() {
  return contexto.br;
}
export function getCurrentPage() {
  return contexto.currentPage;
}
export function getContext() {
  return contexto;
}
//complemento
export function sleep(ms) {
  console.log("esperando ");
  return new Promise((resolve) => setTimeout(resolve, ms));
}
