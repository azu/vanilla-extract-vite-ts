import{r as e,R as t,a as r}from"./vendor.472eb527.js";let l;const n={};function a(){const[r,a]=e.exports.useState(0),s=t.lazy((()=>function(e,t){if(!t)return e();if(void 0===l){const e=document.createElement("link").relList;l=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in n)return;n[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":l,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./Dynamic.d0605722.js")),["./assets/Dynamic.d0605722.js","./assets/Dynamic.31746d92.css","./assets/vendor.472eb527.js"])));return t.createElement("div",{className:"zlmwtm0"},t.createElement(e.exports.Suspense,{fallback:t.createElement("div",null,"Loading...")},t.createElement(s,null)),t.createElement("header",{className:"zlmwtm3"},t.createElement("img",{src:"./assets/logo.ecc203fb.svg",className:"zlmwtm2",alt:"logo"}),t.createElement("p",null,"Hello Vite + React + vanilla-extract!"),t.createElement("p",null,t.createElement("button",{className:"zlmwtm5",onClick:()=>a((e=>e+1))},"count is: ",r)),t.createElement("p",null,"Edit ",t.createElement("code",null,"App.tsx")," and save to test HMR updates."),t.createElement("p",null,t.createElement("a",{className:"zlmwtm4",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",t.createElement("a",{className:"zlmwtm4",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))}r.render(t.createElement(t.StrictMode,null,t.createElement(a,null)),document.getElementById("root"));