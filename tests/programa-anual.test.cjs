"use strict";
const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const html = fs.readFileSync("site/palestras/programa-anual/index.html", "utf8");
const js = fs.readFileSync("site/assets/js/programa-anual.js", "utf8");
const css = fs.readFileSync("site/assets/css/programa-anual.css", "utf8");
assert.match(html, /12x de/);
assert.match(html, /R\$ 250/);
assert.match(html, /R\$ 3\.000,00/);
assert.match(html, /Escolha quando sua empresa começa/);
assert.match(css, /\.lp-month\.is-active/);
assert.equal((html.match(/data-month="\d+"/g) || []).length, 12);
assert.equal((html.match(/name="ciclo-calendario"/g) || []).length, 3);
assert.doesNotMatch(html, /pagamento anual integral|plano online/i);

function clickable(value = "") {
  return {
    value, checked: false, handlers: {},
    addEventListener(event, cb) { this.handlers[event] = cb; },
    fire(event) { this.handlers[event]?.({ preventDefault() {}, target: this }); },
    focus() {}
  };
}
const radios = [clickable("jan-nov"), clickable("fev-dez"), clickable("a-definir")];
const formCycle = clickable("a-definir");
const classes = () => ({
  set: new Set(),
  toggle(k,on) { on ? this.set.add(k) : this.set.delete(k); },
  contains(k) { return this.set.has(k); }
});
const months = Array.from({length: 12}, (_,i) => ({
  dataset: {month: String(i+1)}, classList: classes(), attr: {},
  note: {textContent: ""},
  querySelector(sel) { return sel === ".lp-month-note" ? this.note : null; },
  setAttribute(name,value) { this.attr[name] = value; }
}));
const elements = {
  "form-ciclo": formCycle,
  "lp-months": {querySelectorAll(){return months;}},
  "cycle-label": {textContent:""},
  "cycle-explain": {textContent:""},
  "form-status": {textContent:""},
  nome: clickable("Maria"),
  empresa: clickable("Empresa Teste"),
  telefone: clickable("(62) 99999-8888"),
  cidade: clickable("Goiânia"),
  "local-realizacao": clickable("Setor Bueno, sala de eventos"),
  colaboradores: clickable("35")
};
const form = clickable();
form.checkValidity = () => true;
form.reportValidity = () => {};
elements["lp-form"] = form;
let openedUrl = "";
const document = {
  getElementById(id) { return elements[id] || null; },
  querySelectorAll(sel) {
    if (sel === 'input[name="ciclo-calendario"]') return radios;
    if (sel === "[data-lp-event]") return [];
    return [];
  }
};
const window = {
  location: {
    search:"?utm_source=teste",
    assign(url){ openedUrl = url; }
  },
  dataLayer: [],
  addEventListener() {}
};
vm.runInNewContext(js, {document,window,URLSearchParams}, {timeout: 2000});
const selectedMonths = () => months.filter(m=>m.classList.contains("is-active")).map(m=>Number(m.dataset.month));
assert.equal(formCycle.value, "a-definir");
assert.deepEqual(selectedMonths(), []);
radios[0].checked = true;radios[0].fire("change");
assert.deepEqual(selectedMonths(), [1,3,5,7,9,11]);
assert.equal(formCycle.value, "jan-nov");
assert.equal(months[0].note.textContent, "Palestra 1");
assert.equal(months[10].note.textContent, "Palestra 6");
radios[1].checked = true;radios[1].fire("change");
assert.deepEqual(selectedMonths(), [2,4,6,8,10,12]);
assert.equal(formCycle.value, "fev-dez");
form.fire("submit");
assert.ok(openedUrl.startsWith("https://wa.me/551121105473?text="));
let msg = new URL(openedUrl).searchParams.get("text");
for (const value of [
  "*NOVA CONSULTA — PROGRAMA DE PALESTRAS GEB 2027*",
  "*Empresa:* Empresa Teste","*Responsável:* Maria",
  "*WhatsApp:* (62) 99999-8888","*Cidade:* Goiânia",
  "*Local:* Setor Bueno, sala de eventos","*Colaboradores:* 35",
  "*Ciclo preferido:* fevereiro–dezembro",
  "*Investimento consultado:* 12x de R$ 250,00, total R$ 3.000,00.",
  "Origem da consulta: utm_source=teste"
]) assert.ok(msg.includes(value), "Mensagem não contém: " + value);
formCycle.value = "a-definir";formCycle.fire("change");
assert.deepEqual(selectedMonths(), []);
form.fire("submit");
msg = new URL(openedUrl).searchParams.get("text");
assert.ok(msg.includes("*Ciclo preferido:* a definir"));
formCycle.value = "jan-nov";formCycle.fire("change");
assert.deepEqual(selectedMonths(), [1,3,5,7,9,11]);
assert.equal(radios[0].checked,true);
form.fire("submit");
msg = new URL(openedUrl).searchParams.get("text");
assert.ok(msg.includes("*Ciclo preferido:* janeiro–novembro"));
assert.ok(window.dataLayer.some(e=>e.event === "lp_whatsapp_intent"));
assert.ok(!window.dataLayer.some(e=>/message_sent|whatsapp_sent/.test(e.event)));
console.log("PASS: oferta, 12 meses, dois ciclos, sincronização, formulário e WhatsApp.");
