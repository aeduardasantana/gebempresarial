(()=>{const b=document.querySelector(".menu-toggle"),m=document.querySelector(".menu");if(b&&m)b.addEventListener("click",()=>{const o=m.classList.toggle("open");b.setAttribute("aria-expanded",String(o))});document.addEventListener("click",e=>{const a=e.target.closest("[data-event]");if(a&&window.dataLayer)window.dataLayer.push({event:a.dataset.event})})})();

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
        <a href="/nr-1/diagnostico/">Diagnóstico NR-1</a>
        <a href="/nr-1/programa-continuo/">Programa contínuo</a>
        <a href="/palestras/">Palestras</a>
        <a href="/ecoar/">ECOAR</a>
      </nav>
      <nav class="footer-column" aria-label="Institucional e informações">
        <h2>Conexões</h2>
        <a href="https://grupoeduardabispo.com.br/">GEB Institucional</a>
        <a href="/acessibilidade/">Acessibilidade</a>
        <a href="/privacidade/">Privacidade</a>
        <a href="/termos/">Termos</a>
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
      <small>© 2026 GEB | Empresarial. Todos os direitos reservados.</small>
      <small>Desenvolvido por <strong>Compass Rose Systems · GEB Tecnologia</strong></small>
    </div>`;
  if(!document.getElementById("topo"))document.body.id="topo";
})();
