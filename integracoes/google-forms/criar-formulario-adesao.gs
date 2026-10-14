/**
 * GEB | Criação automática de Google Forms — Adesão Empresarial.
 * Execute criarFormularioParceriaGEB() em https://script.google.com/.
 * Cria formulário REAL na sua conta Google e registra as respostas em uma planilha.
 * Execução idempotente: guarda IDs em Script Properties.
 */
function criarFormularioParceriaGEB() {
  const props = PropertiesService.getScriptProperties();
  const existing = props.getProperty('GEB_FORM_ID');
  if (existing) {
    const form = FormApp.openById(existing);
    Logger.log('FORMULÁRIO: ' + form.getEditUrl());
    Logger.log('RESPOSTAS: ' + form.getPublishedUrl());
    Logger.log('INCORPORAR: ' + form.getPublishedUrl().replace('/viewform', '/viewform?embedded=true'));
    return;
  }
  const form = FormApp.create('Adesão Empresarial | Parceria GEB Saúde, Educação e Inclusão');
  form.setDescription(
    'Adesão gratuita de empresas às parcerias GEB Saúde e GEB Educação. A empresa poderá divulgar aos colaboradores as oportunidades de telessaúde e bolsas educacionais por página personalizada. A contratação de serviços individuais é voluntária e paga pelo interessado. GEB Inclusão: videochamada com intérprete de Libras mediante solicitação e agendamento, R$ 50,00 por atendimento de até 30 minutos. Não há mensalidade corporativa nem contratação obrigatória.'
  );
  form.setConfirmationMessage('Sua solicitação de parceria foi registrada. A equipe do GEB entrará em contato para orientar os próximos passos e a personalização da página.');
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  function texto(t, obrigatorio, ajuda) {
    const q=form.addTextItem().setTitle(t).setRequired(obrigatorio);
    if(ajuda)q.setHelpText(ajuda);
  }
  texto('Razão social',true);
  texto('Nome fantasia para a página do parceiro',true);
  texto('CNPJ da empresa',true,'Informar 14 dígitos, com ou sem pontuação.');
  texto('Cidade',true);
  texto('UF',true);
  texto('Nome do responsável pela adesão',true);
  texto('Cargo/função do responsável',true);
  texto('E-mail profissional de contato',true);
  texto('WhatsApp profissional (com DDD)',true);
  form.addMultipleChoiceItem().setTitle('Quantidade aproximada de colaboradores').setChoiceValues(['1 a 9','10 a 49','50 a 99','100 a 499','500 ou mais','Prefiro não informar']).setRequired(false);
  form.addParagraphTextItem().setTitle('Observações para a personalização da página').setRequired(false).setHelpText('Você poderá encaminhar a logomarca por contato posterior. Não envie informações clínicas ou dados sensíveis de colaboradores.');
  form.addSectionHeaderItem().setTitle('Condições da parceria').setHelpText('GEB Saúde: divulgação de planos opcionais PF Padrão (R$ 29,80/mês) e PF + PIX Farma (R$ 39,90/mês), sujeitos às condições do fornecedor. GEB Educação: consulta a bolsas e descontos de até 83%, conforme curso e disponibilidade. Portal: página personalizada disponibilizada para divulgação interna. GEB Inclusão: direito de solicitar videochamada com intérprete de Libras por R$ 50,00 para até 30 minutos, mediante agendamento e disponibilidade.');
  form.addCheckboxItem().setTitle('Declaração de adesão e ciência dos valores').setChoiceValues(['Declaro que represento a empresa e solicito adesão gratuita às parcerias GEB Saúde e GEB Educação. Estou ciente de que a divulgação não gera mensalidade à empresa, que os serviços contratados pelos colaboradores são opcionais e pagos pelos próprios interessados e que videochamadas de Libras custam R$ 50,00 por atendimento de até 30 minutos, somente quando solicitadas.']).setRequired(true);
  form.addCheckboxItem().setTitle('Tratamento dos dados informados').setChoiceValues(['Autorizo o uso dos dados empresariais e de contato enviados para análise da solicitação, comunicação sobre a parceria e criação da página personalizada, conforme aviso de privacidade apresentado no formulário.']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Aceita receber contatos comerciais sobre outros serviços do GEB? (opcional)').setChoiceValues(['Sim','Não']).setRequired(false);
  const planilha=SpreadsheetApp.create('Respostas | Adesão Empresarial GEB');
  form.setDestination(FormApp.DestinationType.SPREADSHEET,planilha.getId());
  props.setProperty('GEB_FORM_ID',form.getId());
  props.setProperty('GEB_RESPONSES_SHEET_ID',planilha.getId());
  Logger.log('EDITAR: '+form.getEditUrl());
  Logger.log('PUBLICADO: '+form.getPublishedUrl());
  Logger.log('INCORPORAR: '+form.getPublishedUrl().replace('/viewform','/viewform?embedded=true'));
  Logger.log('PLANILHA: '+planilha.getUrl());
}