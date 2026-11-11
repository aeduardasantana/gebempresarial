from pathlib import Path
import re,xml.etree.ElementTree as ET,sys
root=Path("site");errors=[]
primary={"/":"index.html","/solucoes/":"solucoes/index.html","/gestao-processos/":"gestao-processos/index.html","/liderancas-equipes/":"liderancas-equipes/index.html","/nr-1/":"nr-1/index.html","/palestras/":"palestras/index.html","/contato/":"contato/index.html","/mapa-do-site/":"mapa-do-site/index.html"}
for url,name in primary.items():
 p=root/name
 if not p.exists():errors.append(f"Falta rota comercial: {url}");continue
 s=p.read_text(encoding="utf-8")
 for required in ('<h1','name="description"','rel="canonical"','<footer','551121105473','enterprise-v2.css'):
  if required not in s:errors.append(f"{url}: falta {required}")
 for forbidden in ('docs.google.com/forms','/ecoar/','regularizamei','DASN-SIMEI'):
  if forbidden in s:errors.append(f"{url}: referencia indevida {forbidden}")
 if url!="/mapa-do-site/":
  for lp in ("/palestras/programa-anual/","/nr-1/programa-continuo/"):
   if 'href="'+lp+'"' in s:errors.append(f"{url} lista LP {lp}")
 if url in ("/","/solucoes/") and re.search(r'href="/nr-1/diagnostico/"',s):errors.append(f"{url}: vende diagnostico pendente")
home=(root/"index.html").read_text()
if home.count('<h1')!=1:errors.append("Home: mais de um H1")
cat=(root/"solucoes/index.html").read_text()
for name in ("Estruturação de Processos","Gestão Acompanhada","BPO Administrativo","Desenvolvimento de Lideranças e Equipes","Mapeamento Comportamental","Avaliação 360°","Implementação de Medidas Organizacionais","Gestão Psicossocial Contínua","Palestras Corporativas","Workshops Aplicados","Trilhas de Desenvolvimento"):
 if name not in cat:errors.append("Catálogo não inclui "+name)
if "docs.google.com/forms" in (root/"orcamento/index.html").read_text():errors.append("Google Forms no orçamento")
for required in ("/palestras/programa-anual/","/nr-1/programa-continuo/"):
 if 'href="'+required+'"' not in (root/"mapa-do-site/index.html").read_text():errors.append("LP não listada no mapa "+required)
urls=[n.text for n in ET.parse(root/"sitemap.xml").getroot().iter() if n.tag.endswith("loc")]
if len(urls)!=len(set(urls)):errors.append("Sitemap duplicado")
for no in ("/ecoar/","/apoio-empresarial/","/orcamento/","/nr-1/diagnostico/"):
 if any(u.endswith(no) for u in urls):errors.append("Rota legada indexada: "+no)
if "RedirectMatch 302 ^/nr-1/diagnostico/" not in (root/".htaccess").read_text():errors.append("Redirecionamento de diagnostico ausente")
print("GEB Empresarial: "+("; ".join(errors) if errors else f"OK - {len(primary)} rotas chave, 11 serviços, {len(urls)} URLs canônicas"))
if errors:sys.exit(1)
