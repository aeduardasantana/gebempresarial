# Programa anual de palestras — estratégia e aprovação comercial

**Status:** PROTÓTIPO FUNCIONAL — NÃO PUBLICAR SEM APROVAÇÃO
**URL futura:** /palestras/programa-anual/
**Unidade comercial:** GEB Empresarial
**Palestrante principal prevista:** Eduarda Bispo

## 1. Diagnóstico e decisão de arquitetura

A rota /palestras/ já oferece palestras, workshops e treinamentos sob demanda; preservá-la.
A assinatura anual precisa de LP de produto separada, sem apagar a vitrine dos formatos avulsos.
Não se trata de diagnóstico, AEP, implementação de NR-1, nem de contrato de programa contínuo de gestão de riscos psicossociais.

## 2. Segmentos para campanha de 2027

Prioridade inicial: proprietários e gestores de pequenas e médias empresas, diretores operacionais e responsáveis por RH que precisam organizar ações recorrentes de desenvolvimento.
Subsegmento consultivo: organizações com diferentes unidades e interesse em calendário de liderança e comunicação.
**Critério de qualificação:** região, formato desejado, número de participantes e prazo de início; os dois últimos podem ser consultados no atendimento, sem aumentar a fricção do formulário.

## 3. Tese, headlines e CTAs

Tese: "O desenvolvimento contínuo de pessoas pode ser acessível, planejado e inserido na agenda corporativa, sem depender de grandes eventos isolados."

Headline selecionada: **Sua empresa tem um calendário de metas. E o desenvolvimento das pessoas?**
Alternativa 1: "O desenvolvimento da equipe também merece uma agenda."
Alternativa 2: "Em 2027, não deixe o desenvolvimento das pessoas para depois."
Alternativa 3: "Menos palestras avulsas. Mais continuidade para sua equipe."

Critério: a escolhida é mais orientada ao decisor empresarial, menos genérica e permite ativar campanha sazonal sem virar uma promoção efêmera.

CTAs: "Conhecer as modalidades" (descoberta), "Consultar disponibilidade" (intenção comercial) e "Continuar atendimento no WhatsApp" (ação).

## 4. Jornada da página

1. Identificação com a falta de continuidade, sem culpabilização.
2. Apresentação do modelo de calendário anual.
3. Comparação interativa online/presencial.
4. Sugestões de temas organizacionais, sem catálogo fechado.
5. Autoridade profissional de Eduarda sem transformar a marca em pessoal.
6. Disponibilidade **real e verificável**, quando houver fonte confiável.
7. Formulário enxuto que monta uma mensagem para o WhatsApp institucional.
8. FAQ transparente sobre condições pendentes e limites do produto.
9. CTA de fechamento.

## 5. Oferta em análise — USO INTERNO, NÃO APROVADO

| Modalidade | Palestras | Frequência | Duração | Preço proposto | Total proposto |
|---|---:|---|---|---:|---:|
| Online | 12/ano | Mensal | 30 min | R$ 250/mês | R$ 3.000/ano |
| Presencial | 6/ano | Bimestral | 30 min | R$ 250/mês | R$ 3.000/ano |

Os dois valores **não estão divulgados** no HTML funcional. O JavaScript foi configurado com preço desativado. Não se informa número de vagas nem prazo comercial que não esteja respaldado.

**Atenção à margem:** na modalidade presencial, validar distância, tempo de deslocamento, transporte, agendamento e custos. Não considerar automaticamente 30 minutos de palestra como 30 minutos da agenda. Verificar custos adicionais, política geográfica e capacidade real da palestrante antes da venda.

## 6. Regras para escassez legítima

O objeto de configuração em \`site/assets/js/programa-anual.js\` mantém preço, contagem de vagas e campanha desabilitados.
Para liberar preço, a direção deve aprovar valor mensal, valor total e contrato anual. Para prazos, informar data real, início/fim e regulamento aplicado sem reinícios artificiais.
Para quantidade de vagas, substituir configuração estática por fonte confiável — preferencialmente API/back-end da agenda. O protótipo só apresenta contagem explicitamente verificada e recente (menos de 12h), e ainda condiciona à confirmação no atendimento. **Não definir um número arbitrário para estimular conversão.**
Se a agenda fechar, construir fluxos reais de lista de espera antes de anunciá-la. O protótipo não promete lista de espera.

## 7. Captação, mensuração e integridade

**Funcionamento real agora:** o formulário exige nome, empresa, WhatsApp, cidade, UF, modalidade; monta texto com todos os dados e UTMs; redireciona para \`wa.me/551121105473\`. Não há banco de dados, e o envio depende de confirmação da pessoa no WhatsApp. Não chamar esse clique de lead captado.

**Eventos opcionais:** \`lp_select_plan\`, \`lp_form_start\`, \`lp_form_validation_error\`, \`lp_whatsapp_intent\` e eventos dos CTAs. São emitidos **somente se** \`window.dataLayer\` já existir. Não existe GA/GTM integrado nem base comercial.
O evento de WhatsApp é intenção de contato; conversão efetiva requer integração/confirmacão do atendimento e deduplicação.

**LGPD:** política de privacidade linkada. Revisar com governança jurídica e comercial os fluxos de contato, consentimento quando necessário, armazenamento futuro e minimização.

## 8. Checklist de aprovação antes de publicar

- [ ] Confirmar precificação e viabilidade dos dois modelos (ou optar por divulgação somente sob consulta).
- [ ] Aprovar contrato anual, forma de cobrança, vigência e inadimplência.
- [ ] Definir se online é exclusiva por empresa, compartilhada ou outra forma de entrega.
- [ ] Definir limite de participantes por sessão e capacidade técnica das plataformas.
- [ ] Aprovar logística presencial: cidades/UF, deslocamento, hospedagem, custos, janela mínima e duração total reservada.
- [ ] Aprovar reagendamento, cancelamento, alterações de temas, substituição de palestrante e no-show.
- [ ] Confirmar capacidade real da agenda (número de contratos por formato e ciclos).
- [ ] Confirmar datas do ciclo de 2027 e prazo efetivo de campanha, se houver.
- [ ] Aprovar catálogo orientativo de temas e fotografias **reais** da palestrante; inserir foto quando fornecida.
- [ ] Aprovar prova social somente com registros verdadeiros e autorização.
- [ ] Configurar CRM/analytics, caso se deseje contabilizar leads e conversões além da intenção de WhatsApp.
- [ ] Testar mobile (320/375/768/1024), teclado, leitor de tela, VLibras e link WhatsApp.
- [ ] Remover \`noindex,nofollow\` da LP, incluir a URL no sitemap e na navegação somente depois da aprovação e dos testes.
- [ ] Autorizar merge/publicação (push na main dispara deploy FTP via GitHub Actions).

## 9. Integração com a página geral de palestras

Após liberação comercial, inserir em /palestras/ um convite discreto e contextual:
"Precisa manter uma programação ao longo do ano? Conheça o programa anual de palestras."
CTA: "Conhecer o programa anual" -> /palestras/programa-anual/.
**Não substituir** a contratação de palestras isoladas nem criar a impressão de que todo treinamento se enquadra na assinatura.
