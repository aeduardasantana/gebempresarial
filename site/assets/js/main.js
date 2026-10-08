(()=>{const b=document.querySelector(".menu-toggle"),m=document.querySelector(".menu");if(b&&m)b.addEventListener("click",()=>{const o=m.classList.toggle("open");b.setAttribute("aria-expanded",String(o))});document.addEventListener("click",e=>{const a=e.target.closest("[data-event]");if(a&&window.dataLayer)window.dataLayer.push({event:a.dataset.event})})})();

/* Rodapé institucional compartilhado — GEB Empresarial */
(()=>{
  const footer=document.querySelector("footer.footer");
  if(!footer)return;
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
        <a href="/mapa-do-site/">Mapa do site</a>
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
