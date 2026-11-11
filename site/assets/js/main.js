(()=>{
"use strict";
const menu=document.querySelector(".menu"),toggle=document.querySelector(".menu-toggle");
if(menu&&toggle){menu.id="menu-principal";toggle.setAttribute("aria-controls","menu-principal");
 const close=()=>{menu.classList.remove("open");toggle.setAttribute("aria-expanded","false")};
 toggle.addEventListener("click",()=>{const value=!menu.classList.contains("open");menu.classList.toggle("open",value);toggle.setAttribute("aria-expanded",String(value))});
 menu.addEventListener("click",e=>{if(e.target.closest("a"))close()});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(menu.classList.contains("open")){close();toggle.focus()}menu.querySelectorAll("details[open]").forEach(d=>d.open=false)}});
 document.addEventListener("click",e=>{if(!e.target.closest(".site-header")){close();menu.querySelectorAll("details[open]").forEach(d=>d.open=false)}});
 const locationPath=location.pathname.replace(/index\.html$/,"").replace(/\/+$/,"/")||"/";
 menu.querySelectorAll("a[href]").forEach(a=>{if(a.getAttribute("href")===locationPath)a.setAttribute("aria-current","page")});
}
document.addEventListener("click",e=>{const a=e.target.closest("[data-event]");if(a&&window.dataLayer)window.dataLayer.push({event:a.dataset.event})});
if(!document.getElementById("topo"))document.body.id="topo";
})();
/* Blog GEB — apenas páginas institucionais genéricas. Nunca nas landing pages. */
(()=>{
const allowed=new Set(["/","/solucoes/","/gestao-processos/","/liderancas-equipes/","/nr-1/","/palestras/","/parceiros/","/contato/"]);
const path=location.pathname.replace(/\/index\.html$/,"/").replace(/\/+$/,"/")||"/";
if(!allowed.has(path)||document.getElementById("geb-blog-enterprise"))return;
const footer=document.querySelector("footer");if(!footer)return;
const stylesheet=document.createElement("link");stylesheet.rel="stylesheet";stylesheet.href="/assets/css/blog-strip.css?v=20261111";document.head.append(stylesheet);
const section=document.createElement("section");section.id="geb-blog-enterprise";section.className="geb-blog-enterprise";section.setAttribute("aria-labelledby","geb-blog-enterprise-title");
const wrap=document.createElement("div");wrap.className="geb-blog-enterprise__wrap";
const heading=document.createElement("div");heading.className="geb-blog-enterprise__heading";
const intro=document.createElement("div");const eyebrow=document.createElement("span");eyebrow.className="geb-blog-enterprise__eyebrow";eyebrow.textContent="BLOG GEB · EMPRESARIAL";
const title=document.createElement("h2");title.id="geb-blog-enterprise-title";title.className="geb-blog-enterprise__title";title.textContent="Gestão e negócios em perspectiva";
const desc=document.createElement("p");desc.className="geb-blog-enterprise__intro";desc.textContent="Análises e conteúdos sobre gestão, processos, liderança e organização do trabalho.";
intro.append(eyebrow,title,desc);
const all=document.createElement("a");all.href="https://blog.grupoeduardabispo.com.br/?categoria=Empresarial";all.className="geb-blog-enterprise__all";all.textContent="Ver artigos empresariais →";
heading.append(intro,all);
const frame=document.createElement("iframe");frame.className="geb-blog-enterprise__frame";frame.title="Artigos recentes do Blog GEB na editoria Empresarial";frame.src="https://blog.grupoeduardabispo.com.br/assets/embed.html?categoria=Empresarial&limite=3&tema=empresarial";frame.loading="lazy";frame.referrerPolicy="strict-origin-when-cross-origin";
wrap.append(heading,frame);section.append(wrap);footer.before(section);
window.addEventListener("message",event=>{if(event.origin!=="https://blog.grupoeduardabispo.com.br"||event.source!==frame.contentWindow)return;const data=event.data;if(!data||data.type!=="geb-blog-embed-height")return;const h=Number(data.height);if(Number.isFinite(h)&&h>=100&&h<=2500)frame.style.height=Math.ceil(h)+"px"});
})();