export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("<!doctype html><html><head><meta charset='utf-8'><title>repository.xbmc.old</title></head><body><h1>repository.xbmc.old</h1><p>Repositorio preparado para Cloudflare.</p></body></html>", {
        headers: { "content-type": "text/html;charset=UTF-8" },
      });
    }
    return fetch(new Request(`https://raw.githubusercontent.com/borrable56-max/repository.xbmc.old/main${url.pathname}`, request));
  },
};
