/*
 * Programa Anual de Palestras Presenciais — GEB Empresarial — 2027
 * Oferta única: 6 palestras presenciais bimestrais, 30 minutos, 12x R$ 250,
 * investimento total R$ 3.000. Forma operacional do parcelamento sujeita
 * a confirmação. Ciclos são preferências, não reservas de data ou horário.
 * Formulário estático: não salva dados; prepara mensagem de WhatsApp.
 */
(() => {
  "use strict";
  const WHATSAPP = "551121105473";
  const MONTHS = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ];
  const CYCLES = Object.freeze({
    "jan-nov": { name: "janeiro–novembro", months: [1,3,5,7,9,11], label: "Ciclo 1 · janeiro a novembro de 2027" },
    "fev-dez": { name: "fevereiro–dezembro", months: [2,4,6,8,10,12], label: "Ciclo 2 · fevereiro a dezembro de 2027" },
    "a-definir": { name: "a definir", months: [], label: "Sem preferência de ciclo" }
  });
  const $ = id => document.getElementById(id);
  const emit = (event, attributes = {}) => {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event, page_category: "lp_programa_anual_palestras_presenciais_2027",
        product_year: 2027, ...attributes
      });
    }
  };
  const group = document.querySelectorAll('input[name="ciclo-calendario"]');
  const formCycle = $("form-ciclo");
  const timeline = $("lp-months");
  let selected = "a-definir";

  function renderCycle(value, source) {
    if (!Object.prototype.hasOwnProperty.call(CYCLES, value)) return;
    selected = value;
    const cycle = CYCLES[value];
    group.forEach(input => { input.checked = input.value === value; });
    if (formCycle) formCycle.value = value;
    if (timeline) {
      timeline.querySelectorAll("[data-month]").forEach(item => {
        const month = Number(item.dataset.month);
        const index = cycle.months.indexOf(month);
        const active = index !== -1;
        item.classList.toggle("is-active", active);
        item.querySelector(".lp-month-note").textContent = active ? "Palestra " + (index + 1) : "—";
        item.setAttribute("aria-label", MONTHS[month - 1] + (active ? ": palestra " + (index + 1) : ": sem palestra neste ciclo"));
      });
    }
    if ($("cycle-label")) $("cycle-label").textContent = cycle.label;
    if ($("cycle-explain")) {
      $("cycle-explain").textContent = value === "a-definir"
        ? "Selecione um dos ciclos para visualizar os seis meses de palestras. Nenhum ciclo está reservado neste momento."
        : "Meses previstos para o " + cycle.name + ". Esta escolha indica preferência comercial: dias, horários e disponibilidade serão confirmados pelo GEB antes da contratação.";
    }
    if (source) emit("lp_cycle_preference", {cycle: value, source});
  }

  group.forEach(input => {
    input.addEventListener("change", () => {
      if (input.checked) renderCycle(input.value, "calendar");
    });
  });
  if (formCycle) formCycle.addEventListener("change", () => renderCycle(formCycle.value, "form"));
  renderCycle(formCycle && CYCLES[formCycle.value] ? formCycle.value : "a-definir", null);

  document.querySelectorAll("[data-lp-event]").forEach(a => {
    a.addEventListener("click", () => emit(a.dataset.lpEvent, {cycle: selected}));
  });

  const form = $("lp-form");
  if (form) {
    let started = false;
    form.addEventListener("focusin", () => {
      if (!started) { started = true; emit("lp_form_start"); }
    });
    form.addEventListener("submit", e => {
      e.preventDefault();
      const status = $("form-status");
      if (!form.checkValidity()) {
        status.textContent = "Verifique os campos obrigatórios antes de continuar.";
        form.reportValidity();
        emit("lp_form_validation_error", {reason: "required_field"});
        return;
      }
      const value = id => $(id).value.trim();
      const contact = value("telefone").replace(/\D/g, "");
      if (contact.length < 10 || contact.length > 13) {
        status.textContent = "Informe um WhatsApp com DDD válido.";
        $("telefone").focus();
        emit("lp_form_validation_error", {reason: "telephone"});
        return;
      }
      const collaborators = Number(value("colaboradores"));
      if (!Number.isSafeInteger(collaborators) || collaborators < 1 || collaborators > 1000000) {
        status.textContent = "Informe uma quantidade aproximada válida de colaboradores.";
        $("colaboradores").focus();
        emit("lp_form_validation_error", {reason: "collaborators"});
        return;
      }
      // Sempre ler o formulário: a escolha no calendário e o select são sincronizados.
      const cycleKey = formCycle && CYCLES[formCycle.value] ? formCycle.value : "a-definir";
      const cycleName = CYCLES[cycleKey].name;
      const lines = [
        "*NOVA CONSULTA — PROGRAMA DE PALESTRAS GEB 2027*",
        "",
        "*Empresa:* " + value("empresa"),
        "*Responsável:* " + value("nome"),
        "*WhatsApp:* " + value("telefone"),
        "*Cidade:* " + value("cidade"),
        "*Local:* " + value("local-realizacao"),
        "*Colaboradores:* " + collaborators,
        "*Ciclo preferido:* " + cycleName,
        "",
        "*Programa:* 6 palestras presenciais de 30 minutos, com frequência bimestral.",
        "*Investimento consultado:* 12x de R$ 250,00, total R$ 3.000,00.",
        "",
        "Gostaria de confirmar disponibilidade para minha empresa e conhecer as condições de contratação."
      ];
      const params = new URLSearchParams(window.location.search);
      const utms = ["utm_source","utm_medium","utm_campaign","utm_content"]
        .filter(key => params.has(key) && params.get(key).length <= 100)
        .map(key => key + "=" + params.get(key).replace(/[\r\n]/g," "));
      if (utms.length) lines.push("", "Origem da consulta: " + utms.join(" | "));
      const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
      // Intenção de contato não equivale a mensagem efetivamente enviada.
      emit("lp_whatsapp_intent", {cycle: cycleKey, origin: params.get("utm_source") || "direct"});
      status.textContent = "Abrindo o WhatsApp. Confirme o envio da mensagem no aplicativo.";
      window.location.assign(url);
    });
  }

  window.addEventListener("load", () => {
    if (window.VLibras && typeof window.VLibras.Widget === "function") {
      try { new window.VLibras.Widget("https://vlibras.gov.br/app"); }
      catch (_) { /* acesso ao conteúdo textual preservado */ }
    }
  });
})();