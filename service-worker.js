if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-224ec2e5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"7f3fd74284c4471956e1.webp",revision:null},{url:"assets/favicon-16x16.png",revision:"9d3bf8dcfe9c28d815689c0f41571066"},{url:"assets/favicon-32x32.png",revision:"16ea09f4aee4ceff9f99d1b2a1fdd9bb"},{url:"assets/favicon-48x48.png",revision:"cb8df6b81dc5867172d855fdc2748c0e"},{url:"assets/favicon.ico",revision:"77878ae2976c28867c1be748ce292f98"},{url:"index.html",revision:"c05234795fd1384780c5373b66506f38"},{url:"main.bundle.js",revision:"7985ab0c2ebee740901afbf6e734f6c5"},{url:"main.css",revision:"72996e7b6d99aeb94560a4f060204058"},{url:"robots.txt",revision:"50d8a018e8ae96732c8a2ba663c61d4e"},{url:"spritemap.svg",revision:"5a9c7575423b63e76004ca8681271e8f"}],{})}));
//# sourceMappingURL=service-worker.js.map
