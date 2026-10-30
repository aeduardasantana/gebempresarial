# Landing Page — Programa Anual de Palestras Presenciais 2027

**Decisão comercial:** Correção prioritária de LP de conversão B2B, 30/10/2026  
**Repositório:** aeduardasantana/gebempresarial  
**Página:** https://gebempresarial.grupoeduardabispo.com.br/palestras/programa-anual/  
**Marca contratante:** GEB Empresarial  
**Palestrante principal:** Eduarda Bispo

## 1. Oferta única, sem comparação de planos

- Programa anual de seis palestras presenciais em 2027.
- Uma palestra a cada dois meses (frequência da entrega, não da cobrança).
- Duração de 30 minutos por palestra.
- Investimento anunciado: **12x de R$ 250,00**.
- Valor total contratado: **R$ 3.000,00**.
- Modalidade operacional do parcelamento **a confirmar antes da contratação**, sem afirmar ausência de juros.
- Região comercial: Goiânia e Região Metropolitana; localidades efetivamente atendidas sob consulta.
- Execução sujeita à disponibilidade real da agenda para 2027 e calendário confirmado em contrato.

Nenhuma outra modalidade, preço, desconto ou prazo de adesão é autorizado. Escassez só poderá refletir agenda real; nenhum saldo numérico está configurado.

## 2. Tese e primeira dobra

O produto vende **continuidade do desenvolvimento humano com previsibilidade financeira e calendário presencial anual**, sem linguagem de promoção barata.

Headline: "Sua empresa tem metas para 2027. E o desenvolvimento da sua equipe?"

Subheadline: "Garanta uma programação anual com seis palestras presenciais, uma a cada dois meses, para desenvolver pessoas e fortalecer as relações de trabalho."

Ordem visual: descrição do programa → **12x de R$ 250,00** como valor principal → total de R$ 3.000,00 como valor secundário → CTA "Consultar disponibilidade para minha empresa" → condições de agenda e localidade. No mobile, o preço compacto antecede o CTA; no desktop, está no quadro comercial em destaque.

Header exclusivo e simplificado para a LP: logo + ação de consulta, sem a navegação institucional extensa da página genérica.

## 3. Calendários alternativos

Seção central: **"Escolha quando sua empresa começa."**

| Palestra | Ciclo 1 | Ciclo 2 |
|---|---|---|
| 1 | Janeiro/2027 | Fevereiro/2027 |
| 2 | Março/2027 | Abril/2027 |
| 3 | Maio/2027 | Junho/2027 |
| 4 | Julho/2027 | Agosto/2027 |
| 5 | Setembro/2027 | Outubro/2027 |
| 6 | Novembro/2027 | Dezembro/2027 |

São **alternativas mutuamente exclusivas**, nunca programas cumulativos. Cada ciclo tem exatamente seis palestras.

A seleção ocorre por radio buttons acessíveis; há a terceira opção "Prefiro definir o ciclo com o GEB" e ela é o padrão, para não atribuir uma preferência não declarada. A linha do tempo exibe 12 meses e destaca exclusivamente os seis meses do ciclo selecionado; a legenda indica "Palestra 1" a "Palestra 6".

O campo de preferência de ciclo no formulário espelha automaticamente os radio buttons e também pode ser alterado diretamente; a alteração sincroniza a linha do tempo. Sem preferência é um valor válido. A seleção nunca reserva automaticamente um mês, dia ou horário e deve ser confirmada pelo atendimento.

## 4. Formulário e WhatsApp

Campos obrigatórios:
- Nome do responsável;
- Empresa;
- WhatsApp com DDD;
- Cidade de realização;
- Bairro / local previsto;
- Quantidade aproximada de colaboradores (número positivo).

Campo opcional:
- Ciclo de preferência (janeiro–novembro, fevereiro–dezembro ou a definir).

Ao enviar, montar o link oficial para **+55 11 2110-5473**, com \`encodeURIComponent\` e mensagem:

\`*NOVA CONSULTA — PROGRAMA DE PALESTRAS GEB 2027*\`

- Empresa, Responsável, WhatsApp, Cidade, Local e Colaboradores;
- Ciclo preferido;
- Programa: 6 palestras presenciais de 30 minutos, frequência bimestral;
- Investimento consultado: 12x de R$ 250,00, total R$ 3.000,00;
- Pedido de confirmação de disponibilidade e condições de contratação;
- UTM de origem, quando presente, sem aumentar atrito.

O evento \`lp_whatsapp_intent\` representa **somente abertura/tentativa de contato**. O usuário precisa confirmar envio da mensagem no WhatsApp. Não existe CRM ou registro de mensagem efetivamente entregue nesta LP.

## 5. Confirmação e transparência

- Nenhuma escolha de ciclo concede direito de exigir qualquer data ou horário dentro do mês.
- O atendimento deve confirmar o município/bairro/endereço, a logística e a capacidade de agenda.
- Política de cancelamento, reagendamento e condições contratuais devem ser confirmadas antes da formalização.
- Limite de participantes e exigências físicas/técnicas devem constar da proposta.
- Palestras não substituem diagnóstico técnico, gerenciamento de riscos ocupacionais nem implementação da NR-1.
- Preço parcelado comercialmente aprovado para apresentação, **sem validar ainda o meio operacional do parcelamento**.

## 6. QA técnico

Revisão estática: HTML com marcação equilibrada, 12 meses, 3 opções de ciclo, ID únicos, âncoras com destino, campos exigidos, ausência de expressões antigas sobre pagamento integral e modalidade online.

Testes funcionais do código JavaScript com DOM simulado:
1. Padrão "a definir": nenhuma preferência atribuída.
2. Ciclo 1: meses [1,3,5,7,9,11] destacados, sincronização com formulário.
3. Ciclo 2: meses [2,4,6,8,10,12] destacados, sincronização.
4. Sem preferência: limpa a linha do tempo sem impedir envio.
5. WhatsApp: URL com número correto e texto codificado contendo todos os campos.
6. Ciclo 2 e sem preferência: propagação correta na mensagem.
7. Analytics: há evento de intenção de contato, sem evento falso de mensagem enviada.

A verificação do comportamento visual em navegador real e da conclusão do envio no aplicativo WhatsApp são distintas destes testes. Não confundir intenção com entrega.

## 7. Governança e próximos controles

- Fotografia profissional real de Eduarda: usar quando disponibilizada/aprovada. Não substituir por imagem sintética da pessoa.
- Confirmar meio operacional de parcelamento e encargos eventuais antes de formalizar contratos.
- Governar janelas reais de agenda 2027 e localidades efetivamente atendidas.
- Verificar rastreabilidade dos leads no processo comercial fora da LP, se desejado.
- Monitorar taxas de seleção de ciclo, cliques de CTA e intenções de contato com analytics real antes de produzir relatórios de conversão.
