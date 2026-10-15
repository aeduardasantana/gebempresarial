(()=>{
 const menu=document.querySelector(".menu");
 if(menu){menu.innerHTML=`<a href="/nr-1/">NR-1</a><a href="/solucoes/">Riscos Psicossociais</a><a href="/palestras/">Palestras</a><a href="/apoio-empresarial/">Apoio Empresarial</a><a href="/parceiros/">Parceiros</a><a href="/ecoar/">ECOAR</a><a class="btn primary" href="/orcamento/">Solicitar orçamento</a>`;menu.id="menu-principal";menu.setAttribute("aria-label","Navegação principal");
 const path=location.pathname.replace(/index\.html$/,"");menu.querySelectorAll("a").forEach(a=>{if(a.getAttribute("href")===path)a.setAttribute("aria-current","page")});}
 const button=document.querySelector(".menu-toggle");
 if(button&&menu){button.setAttribute("aria-controls","menu-principal");button.addEventListener("click",()=>{const open=menu.classList.toggle("open");button.setAttribute("aria-expanded",String(open))});
 menu.addEventListener("click",e=>{if(e.target.closest("a")){menu.classList.remove("open");button.setAttribute("aria-expanded","false")}});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&menu.classList.contains("open")){menu.classList.remove("open");button.setAttribute("aria-expanded","false");button.focus()}});}
 document.addEventListener("click",e=>{const a=e.target.closest("[data-event]");if(a&&window.dataLayer)window.dataLayer.push({event:a.dataset.event})});
})();

/* Rodapé institucional compartilhado — GEB Empresarial */
(()=>{
  const footer=document.querySelector("footer.footer");
  if(!footer)return;
  // Garante a formatação mesmo quando o navegador conserva a folha CSS antiga em cache.
  if(!document.getElementById("geb-footer-css")){
    const style=document.createElement("style");
    style.id="geb-footer-css";
    style.textContent="/* Rodapé GEB Empresarial — identidade própria, arquitetura alinhada ao ecossistema */\n.footer{background:#0c1510;color:#f6f8f5;padding:4.5rem 0 1.4rem;border-top:5px solid var(--accent)}\n.footer .footer-grid{display:grid;grid-template-columns:minmax(0,1.6fr) repeat(2,minmax(0,1fr)) minmax(0,1.25fr);gap:clamp(1.5rem,3.5vw,4rem);align-items:start}\n.footer-brand .footer-brand-link{display:inline-block;max-width:230px}\n.footer-logo{display:block;width:210px;max-width:100%;height:auto;max-height:118px;object-fit:contain;object-position:left center;filter:grayscale(1) brightness(0) invert(1)}\n.footer-brand p{max-width:370px;line-height:1.75;color:#d4dfd6;margin:1.2rem 0 1.5rem}\n.footer .footer-column h2{margin:0 0 1.55rem;font-size:.85rem;font-weight:800;letter-spacing:.12em;line-height:1.4;text-transform:uppercase;color:#dfbd67}\n.footer .footer-column>a{display:block;width:fit-content;max-width:100%;font-size:.95rem;line-height:1.55;margin:0 0 1rem;color:#f6f8f5;text-decoration:none;overflow-wrap:anywhere}\n.footer .footer-column>a:hover,.footer .footer-top-link:hover{color:#f0cb75;text-decoration:underline}\n.footer .footer-column p{color:#cedbd0;font-size:.95rem;line-height:1.55;margin:0 0 1rem}\n.footer .footer-top-link{display:inline-block;color:#fff;text-decoration:none;border-bottom:1px solid #758579;font-weight:800;font-size:.8rem;letter-spacing:.035em;text-transform:uppercase;padding-bottom:.45rem}\n.footer .footer-contact>a.footer-cta{display:inline-block;padding:.9rem 1rem;margin-top:.7rem;border:1px solid #be9947;color:#fff;font-weight:800;text-decoration:none}\n.footer .footer-contact>a.footer-cta:hover{background:#be9947;color:#0c1510}\n.footer .footer-bottom{display:flex;justify-content:space-between;align-items:center;gap:1rem;border-top:1px solid #344139;margin-top:3.3rem;padding-top:1.25rem}\n.footer .footer-bottom small{color:#c6d2c8;font-size:.8rem;line-height:1.6}\n.footer .footer-bottom strong{color:#f6f8f5;font-weight:650}\n@media(max-width:1000px){.footer .footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:2.5rem}.footer .footer-bottom{align-items:flex-start;flex-direction:column}}\n@media(max-width:600px){.footer{padding-top:3rem}.footer .footer-grid{grid-template-columns:1fr;gap:2rem}.footer-logo{width:180px}.footer .footer-bottom{margin-top:2.5rem}}\n";
    document.head.appendChild(style);
  }
  footer.id="rodape";
  footer.innerHTML=`
    <div class="wrap footer-grid">
      <div class="footer-brand">
        <a href="/" aria-label="GEB Empresarial — início" class="footer-brand-link">
          <img src="/assets/geb-empresarial-logo.webp" alt="GEB Empresarial" class="footer-logo" loading="lazy">
        </a>
        <p>Soluções para riscos psicossociais, desenvolvimento e comunicação nas relações de trabalho.</p>
        <a href="#topo" class="footer-top-link">Voltar ao topo ↑</a>
      </div>
      <nav class="footer-column" aria-label="Soluções empresariais">
        <h2>GEB Empresarial</h2>
        <a href="/nr-1/">NR-1 e riscos psicossociais</a>
        <a href="/nr-1/diagnostico/">Diagnóstico NR-1</a>
        <a href="/nr-1/programa-continuo/">Programa contínuo</a>
        <a href="/palestras/">Palestras e desenvolvimento</a>
        <a href="/ecoar/">ECOAR</a>
        <a href="/apoio-empresarial/">Apoio Empresarial</a>
      </nav>
      <nav class="footer-column" aria-label="Navegação institucional">
        <h2>Navegação</h2>
        <a href="/solucoes/">Riscos Psicossociais</a>
        <a href="/parceiros/">Parceiros</a>
        <a href="/conteudo/">Conteúdo</a>
        <a href="/contato/">Contato</a>
        <a href="/mapa-do-site/">Mapa do site</a>
        <a href="https://grupoeduardabispo.com.br/">GEB Institucional</a>
      </nav>
      <div class="footer-column footer-contact">
        <h2>Atendimento</h2>
        <a href="https://wa.me/551121105473" aria-label="Conversar no WhatsApp do GEB Empresarial">(11) 2110-5473</a>
        <a href="mailto:empresarial@grupoeduardabispo.com.br">empresarial@grupoeduardabispo.com.br</a>
        <p>Atendimento empresarial online</p>
        <a class="footer-cta" href="/orcamento/">Solicitar proposta →</a>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <small>© 2026 GEB - Grupo Eduarda Bispo. Todos os direitos reservados.</small>
      <small>Desenvolvido por <a href="https://gebtecnologia.grupoeduardabispo.com.br/"><strong>Compass Rose Systems · GEB Tecnologia</strong></a></small>
    </div>`;
  if(!document.getElementById("topo"))document.body.id="topo";
})();


/* Blog GEB: exibir apenas em páginas institucionais. Nunca em LPs. */
(()=>{
  const allowed=new Set([
    "/","/nr-1/","/nr-1/diagnostico/","/nr-1/programa-continuo/",
    "/solucoes/","/apoio-empresarial/","/palestras/","/parceiros/",
    "/ecoar/","/conteudo/","/contato/","/orcamento/",
    "/acessibilidade/","/privacidade/","/termos/","/mapa-do-site/"
  ]);
  const path=location.pathname.replace(/\/index\.html$/,"/").replace(/\/+$/,"/")||"/";
  if(!allowed.has(path)||document.getElementById("geb-blog-enterprise"))return;
  const footer=document.querySelector("footer");
  if(!footer)return;
  const style=document.createElement("link");style.rel="stylesheet";style.href="/assets/css/blog-strip.css?v=20261015";document.head.append(style);
  const section=document.createElement("section");section.id="geb-blog-enterprise";section.className="geb-blog-enterprise";
  section.setAttribute("aria-labelledby","geb-blog-enterprise-title");
  const wrap=document.createElement("div");wrap.className="geb-blog-enterprise__wrap";
  const heading=document.createElement("div");heading.className="geb-blog-enterprise__heading";
  const intro=document.createElement("div");
  const eyebrow=document.createElement("span");eyebrow.className="geb-blog-enterprise__eyebrow";eyebrow.textContent="BLOG GEB · EMPRESARIAL";
  const title=document.createElement("h2");title.className="geb-blog-enterprise__title";title.id="geb-blog-enterprise-title";title.textContent="Conhecimento que fortalece decisões";
  const description=document.createElement("p");description.className="geb-blog-enterprise__intro";description.textContent="Explore os três artigos mais recentes sobre gestão, negócios, liderança e riscos psicossociais.";
  intro.append(eyebrow,title,description);
  const seeAll=document.createElement("a");seeAll.className="geb-blog-enterprise__all";seeAll.href="https://blog.grupoeduardabispo.com.br/?categoria=Empresarial";seeAll.textContent="Ver todos os artigos empresariais →";
  heading.append(intro,seeAll);
  const frame=document.createElement("iframe");frame.className="geb-blog-enterprise__frame";
  frame.title="Três artigos mais recentes da categoria Empresarial do Blog GEB";
  frame.src="https://blog.grupoeduardabispo.com.br/assets/embed.html?categoria=Empresarial&limite=3";
  frame.loading="lazy";frame.setAttribute("referrerpolicy","strict-origin-when-cross-origin");
  wrap.append(heading,frame);section.append(wrap);footer.before(section);
  window.addEventListener("message",event=>{
    if(event.origin!=="https://blog.grupoeduardabispo.com.br"||event.source!==frame.contentWindow)return;
    const data=event.data;
    if(!data||data.type!=="geb-blog-embed-height")return;
    const h=Number(data.height);
    if(Number.isFinite(h)&&h>=100&&h<=2500&&frame.style.height!==Math.ceil(h)+"px")frame.style.height=Math.ceil(h)+"px";
  });
})();
