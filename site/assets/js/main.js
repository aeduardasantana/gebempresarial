/* GEB Empresarial — navegação institucional compartilhada e Blog Empresarial */
(()=>{
 const path=location.pathname.replace(/\/index\.html$/,"/").replace(/\/+$/,"/")||"/";
 const button=document.querySelector(".menu-toggle"),menu=document.querySelector(".site-nav, .menu");
 if(button&&menu){menu.id=menu.id||"main-navigation";button.setAttribute("aria-controls",menu.id);button.addEventListener("click",()=>{const expanded=button.getAttribute("aria-expanded")==="true";button.setAttribute("aria-expanded",String(!expanded));menu.classList.toggle("open",!expanded)});menu.addEventListener("click",event=>{if(event.target.closest("a")){button.setAttribute("aria-expanded","false");menu.classList.remove("open")}});document.addEventListener("keydown",event=>{if(event.key==="Escape"){button.setAttribute("aria-expanded","false");menu.classList.remove("open")}})}
 if(document.body.classList.contains("geb-v2")){
  menu?.querySelectorAll("a").forEach(a=>{if(a.getAttribute("href")===path)a.setAttribute("aria-current","page")});
 }else if(!document.body.classList.contains("lp-programa")){
  // Keep historic pages (institucionais, parceiros, políticas) aligned until fully migrated.
  const wa="https://wa.me/551121105473?text="+encodeURIComponent("Olá! Gostaria de conversar com o GEB Empresarial.");
  const nav=document.querySelector(".menu");
  if(nav){nav.innerHTML='<a href="/">Início</a><a href="/solucoes/">Soluções</a><a href="/palestras/">Palestras e Workshops</a><a href="/parceiros/">Parceiros</a><a href="/contato/">Contato</a><a class="btn primary" href="'+wa+'">Conversar com o GEB</a>';nav.querySelectorAll("a").forEach(a=>{if(a.getAttribute("href")===path)a.setAttribute("aria-current","page")})}
  const footer=document.querySelector("footer.footer");if(footer){
   footer.innerHTML='<div class="wrap footer-grid"><div><strong>GEB Empresarial</strong><p>Gestão, Processos e Desenvolvimento Humano.</p><small>Grupo Eduarda Bispo</small></div><div><strong>Soluções</strong><p><a href="/gestao-processos/">Gestão e Processos</a><br><a href="/liderancas-equipes/">Lideranças e Equipes</a><br><a href="/nr-1/">Riscos Psicossociais</a><br><a href="/palestras/">Palestras e Workshops</a></p></div><div><strong>Institucional</strong><p><a href="/parceiros/">Parceiros</a><br><a href="/contato/">Contato</a><br><a href="/mapa-do-site/">Mapa do site</a><br><a href="/privacidade/">Privacidade</a><br><a href="/termos/">Termos</a></p></div><div><strong>Atendimento</strong><p><a href="'+wa+'">(11) 2110-5473</a><br><a href="mailto:empresarial@grupoeduardabispo.com.br">empresarial@grupoeduardabispo.com.br</a></p></div></div><div class="wrap footer-bottom"><small>© 2026 GEB Empresarial · Grupo Eduarda Bispo.</small></div>';
  }
 }
 document.addEventListener("click",event=>{const link=event.target.closest("[data-event]");if(link&&window.dataLayer)window.dataLayer.push({event:link.dataset.event})});
 const allowed=new Set(["/","/solucoes/","/gestao-processos/","/liderancas-equipes/","/nr-1/","/palestras/","/contato/","/parceiros/"]);
 if(!allowed.has(path)||document.getElementById("geb-blog-enterprise"))return;
 const footer=document.querySelector("footer");if(!footer)return;
 const style=document.createElement("link");style.rel="stylesheet";style.href="/assets/css/blog-strip.css?v=20261015";document.head.append(style);
 const sec=document.createElement("section");sec.id="geb-blog-enterprise";sec.className="geb-blog-enterprise";
 sec.innerHTML='<div class="geb-blog-enterprise__wrap"><div class="geb-blog-enterprise__heading"><div><span class="geb-blog-enterprise__eyebrow">BLOG GEB · EMPRESARIAL</span><h2 id="geb-blog-enterprise-title" class="geb-blog-enterprise__title">Conhecimento para decisões empresariais</h2><p class="geb-blog-enterprise__intro">Artigos sobre gestão, liderança, organização do trabalho e negócios.</p></div><a class="geb-blog-enterprise__all" href="https://blog.grupoeduardabispo.com.br/?categoria=Empresarial">Explorar artigos empresariais →</a></div></div>';
 sec.setAttribute("aria-labelledby","geb-blog-enterprise-title");
 const f=document.createElement("iframe");f.className="geb-blog-enterprise__frame";f.title="Artigos recentes da editoria Empresarial do Blog GEB";f.src="https://blog.grupoeduardabispo.com.br/assets/embed.html?categoria=Empresarial&limite=3&tema=empresarial";f.loading="lazy";f.setAttribute("referrerpolicy","strict-origin-when-cross-origin");sec.firstElementChild.append(f);footer.before(sec);
 window.addEventListener("message",event=>{if(event.origin!=="https://blog.grupoeduardabispo.com.br"||event.source!==f.contentWindow)return;const x=event.data;if(x&&x.type==="geb-blog-embed-height"){const h=Number(x.height);if(Number.isFinite(h)&&h>=100&&h<=2500)f.style.height=Math.ceil(h)+"px";}});
})();
