/*
 * GEB Empresarial — Programa Anual de Palestras
 * Gatilhos comerciais desativados até aprovação e disponibilidade verificável.
 * Não alterar preços/prazos/estoque sem aprovação da direção e mecanismo confiável de atualização.
 */
(() => {
  "use strict";
  const commercial = Object.freeze({
    pricingApproved: false,
    monthlyPriceBRL: null,
    annualPriceBRL: null,
    campaignEnabled: false,
    campaignStartISO: null,
    campaignDeadlineISO: null,
    verifiedAvailability: null,
    availabilityVerifiedAtISO: null
  });
  const whatsapp = "551121105473";
  const plans = {
    online: {
      title: "PROGRAMA ONLINE",
      count: "12",
      frequency: "1 palestra por mês",
      note: "Formato de participação e limite de público sujeitos à definição comercial.",
      cta: "Consultar disponibilidade para o plano online"
    },
    presencial: {
      title: "PROGRAMA PRESENCIAL",
      count: "6",
      frequency: "1 palestra a cada dois meses",
      note: "Sujeito à região atendida, agenda e condições de deslocamento, informadas antes da contratação.",
      cta: "Consultar disponibilidade para o plano presencial"
    }
  };
  const $ = id => document.getElementById(id);
  const fmtMoney = n => new Intl.NumberFormat("pt-BR", {style:"currency",currency:"BRL",minimumFractionDigits:2}).format(n);
  const emit = (name, data = {}) => {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({event: name, page_category: "lp_programa_anual_palestras", ...data});
    }
  };
  let selectedPlan = "online";

  function renderPlan(which) {
    if (!Object.prototype.hasOwnProperty.call(plans, which)) return;
    selectedPlan = which;
    const plan = plans[which];
    $("plano-tipo").textContent = plan.title;
    $("plano-quantidade").textContent = plan.count;
    $("plano-frequencia").textContent = plan.frequency;
    $("plano-ressalva").textContent = plan.note;
    $("plano-cta").firstChild.textContent = plan.cta + " ";
    $("form-modalidade").value = which;
    const validPrice = commercial.pricingApproved &&
      Number.isFinite(commercial.monthlyPriceBRL) && commercial.monthlyPriceBRL > 0 &&
      Number.isFinite(commercial.annualPriceBRL) && commercial.annualPriceBRL > 0;
    $("plano-investimento").textContent = validPrice
      ? fmtMoney(commercial.monthlyPriceBRL) + "/mês · " + fmtMoney(commercial.annualPriceBRL) + "/ano"
      : "Sob consulta";
    $("valor-aviso").textContent = validPrice
      ? "Pagamento mensal mediante contratação anual. Sujeito às condições previstas em contrato."
      : "Valores e condições de contratação estão em validação comercial.";
  }

  document.querySelectorAll('input[name="modalidade"]').forEach(input => {
    input.addEventListener("change", event => {
      renderPlan(event.target.value);
      emit("lp_select_plan", {plan: selectedPlan});
    });
  });
  $("form-modalidade").addEventListener("change", event => {
    renderPlan(event.target.value);
    const option = document.querySelector('input[name="modalidade"][value="' + selectedPlan + '"]');
    if (option) option.checked = true;
    emit("lp_select_plan", {plan: selectedPlan, source: "form"});
  });
  renderPlan(selectedPlan);

  // A campanha deve ter datas reais com fuso e efeitos comerciais aplicados externamente.
  const now = new Date();
  if (commercial.campaignEnabled && commercial.campaignStartISO && commercial.campaignDeadlineISO) {
    const start = new Date(commercial.campaignStartISO);
    const end = new Date(commercial.campaignDeadlineISO);
    if (Number.isFinite(start.valueOf()) && Number.isFinite(end.valueOf()) &&
        start < end && now >= start && now <= end) {
      const deadline = new Intl.DateTimeFormat("pt-BR",{
        dateStyle: "long", timeZone: "America/Sao_Paulo"
      }).format(end);
      $("campanha-aviso").textContent = "Condição comercial com encerramento previsto em " + deadline + ", conforme regulamento da campanha.";
      $("campanha-aviso").hidden = false;
    }
  }
  // Só publicar quantidades quando um sistema confiável validar a disponibilidade
  // de contratos e a atualização for recente. Não há contador sintético.
  if (Number.isInteger(commercial.verifiedAvailability) &&
      commercial.verifiedAvailability >= 0 &&
      commercial.availabilityVerifiedAtISO) {
    const verifiedAt = new Date(commercial.availabilityVerifiedAtISO);
    const freshness = now.valueOf() - verifiedAt.valueOf();
    const fresh = Number.isFinite(verifiedAt.valueOf()) && freshness >= 0 && freshness < 12 * 60 * 60 * 1000;
    if (fresh) {
      const count = commercial.verifiedAvailability;
      $("disponibilidade-texto").textContent = count > 0
        ? "Disponibilidade informada pela equipe: " + count +
          (count === 1 ? " adesão potencial, " : " adesões potenciais, ") +
          "sujeita à confirmação no atendimento. Modalidade presencial condicionada à região e à logística."
        : "Não há disponibilidade confirmada neste momento. Consulte a equipe para saber sobre próximos períodos de agenda.";
    }
  }

  const params = new URLSearchParams(window.location.search);
  const allowedUTM = ["utm_source","utm_medium","utm_campaign","utm_content"];
  document.querySelectorAll("[data-lp-event]").forEach(el => {
    el.addEventListener("click", () => emit(el.dataset.lpEvent, {plan: selectedPlan}));
  });
  let formStarted = false;
  $("lp-form").addEventListener("focusin", () => {
    if (!formStarted) {
      formStarted = true;
      emit("lp_form_start",{plan: selectedPlan});
    }
  });
  $("lp-form").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = $("form-status");
    if (!form.checkValidity()) {
      status.textContent = "Confira os campos obrigatórios e complete as informações antes de continuar.";
      form.reportValidity();
      emit("lp_form_validation_error",{plan: selectedPlan});
      return;
    }
    const value = id => $(id).value.trim();
    const phone = value("telefone").replace(/\D/g,"");
    if (phone.length < 10 || phone.length > 13) {
      status.textContent = "Informe um número de WhatsApp válido com DDD.";
      $("telefone").focus();
      return;
    }
    const selected = plans[selectedPlan];
    const lines = [
      "Olá! Gostaria de consultar a assinatura anual de palestras do GEB Empresarial.",
      "Responsável: " + value("nome"),
      "Empresa: " + value("empresa"),
      "WhatsApp de retorno: " + value("telefone"),
      "Local: " + value("cidade") + " / " + value("estado"),
      "Modalidade: " + (selectedPlan === "online" ? "Online" : "Presencial"),
      "Programa: " + selected.count + " palestras anuais, com duração de 30 minutos cada.",
      "Solicito disponibilidade, condições comerciais e orientações para contratação."
    ];
    const utm = allowedUTM
      .filter(key => params.get(key) && params.get(key).length <= 100)
      .map(key => key + "=" + params.get(key).replace(/[\r\n]/g, " "));
    if (utm.length) lines.push("Origem: " + utm.join(" | "));
    const url = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
    emit("lp_whatsapp_intent", {plan: selectedPlan, origin: params.get("utm_source") || "direct"});
    // A página não tem backend nem registra leads; a mensagem requer envio pelo visitante.
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.assign(url);
    } else {
      status.textContent = "O WhatsApp foi aberto. Confirme o envio da mensagem para concluir seu contato.";
    }
  });
  // VLibras é recurso adicional: não compromete a navegação se estiver indisponível.
  window.addEventListener("load", () => {
    if (window.VLibras && typeof window.VLibras.Widget === "function") {
      try { new window.VLibras.Widget("https://vlibras.gov.br/app"); } catch (_) { /* fallback textual */ }
    }
  });
})();
