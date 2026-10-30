/*
 * GEB Empresarial — Programa Anual Presencial de Palestras | 2027
 * Decisão comercial da Presidência: oferta única, sem seleção de planos.
 *
 * Escassez: nenhum saldo ou prazo é inventado. A disponibilidade real
 * é confirmada pela equipe antes da contratação. Não há contador regressivo.
 * Não há backend/CRM: este formulário apenas prepara a mensagem no WhatsApp.
 */
(() => {
  "use strict";
  const whatsapp = "551121105473";
  const product = Object.freeze({
    name: "Programa Anual de Palestras — GEB Empresarial",
    year: 2027,
    type: "presencial",
    sessions: 6,
    frequency: "bimestral",
    durationMinutes: 30,
    annualPriceBRL: 3000,
    payment: "anual integral",
    region: "Goiânia e Região Metropolitana, mediante confirmação da localidade"
  });
  const $ = (id) => document.getElementById(id);

  function emit(event, attributes = {}) {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event,
        page_category: "lp_programa_anual_palestras_presencial",
        product_type: product.type,
        product_year: product.year,
        ...attributes
      });
    }
  }

  document.querySelectorAll("[data-lp-event]").forEach(element => {
    element.addEventListener("click", () => emit(element.dataset.lpEvent));
  });

  const form = $("lp-form");
  if (form) {
    let formStarted = false;
    form.addEventListener("focusin", () => {
      if (!formStarted) {
        formStarted = true;
        emit("lp_form_start");
      }
    });
    form.addEventListener("submit", event => {
      event.preventDefault();
      const status = $("form-status");
      if (!form.checkValidity()) {
        status.textContent = "Preencha os campos obrigatórios para consultar a disponibilidade.";
        form.reportValidity();
        emit("lp_form_validation_error", {reason: "required_field"});
        return;
      }

      const value = (id) => $(id).value.trim();
      const phone = value("telefone").replace(/\D/g, "");
      if (phone.length < 10 || phone.length > 13) {
        status.textContent = "Informe um WhatsApp válido, com DDD.";
        $("telefone").focus();
        emit("lp_form_validation_error", {reason: "telephone"});
        return;
      }

      // Elegibilidade é confirmada pela equipe, não inferida automaticamente:
      // nem todos os municípios/endereço da região podem ser atendidos.
      const lines = [
        "Olá! Gostaria de consultar a disponibilidade do Programa Anual de Palestras do GEB Empresarial para 2027.",
        "Responsável: " + value("nome"),
        "Empresa: " + value("empresa"),
        "WhatsApp de retorno: " + value("telefone"),
        "Cidade de realização: " + value("cidade"),
        "Local previsto: " + value("local-realizacao"),
        "Programa: 6 palestras presenciais bimestrais, de 30 minutos cada.",
        "Investimento informado: R$ 3.000,00 por ano, com pagamento integral.",
        "Solicito confirmação de atendimento da localidade, agenda disponível para 2027 e condições contratuais."
      ];

      const query = new URLSearchParams(window.location.search);
      const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
      const utms = utmKeys
        .filter(key => query.get(key) && query.get(key).length <= 100)
        .map(key => key + "=" + query.get(key).replace(/[\r\n]/g, " "));
      if (utms.length) lines.push("Origem do contato: " + utms.join(" | "));

      const link = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
      emit("lp_whatsapp_intent", {origin: query.get("utm_source") || "direct"});
      // O contato só é efetivado quando a pessoa envia a mensagem no WhatsApp.
      status.textContent = "Abrindo o WhatsApp. Confirme o envio para solicitar sua consulta.";
      window.location.assign(link);
    });
  }

  // VLibras complementa os recursos nativos de acessibilidade.
  window.addEventListener("load", () => {
    if (window.VLibras && typeof window.VLibras.Widget === "function") {
      try {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      } catch (_) {
        /* manter toda a navegação textual caso o plugin esteja indisponível */
      }
    }
  });
})();
