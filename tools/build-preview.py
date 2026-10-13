#!/usr/bin/env python3
"""Gera preview-standalone.html (arquivo único, sem CSP) a partir de index.html + css/app.css + js/app.js.
Uso (na raiz do repositório):  python3 tools/build-preview.py"""
import re,os,sys
root=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
h=open(os.path.join(root,'index.html'),encoding='utf-8').read()
css=open(os.path.join(root,'css/app.css'),encoding='utf-8').read()
js=open(os.path.join(root,'js/app.js'),encoding='utf-8').read()
h=re.sub(r'\s*<meta http-equiv="Content-Security-Policy"[^>]*>','',h)  # arquivo único usa script embutido: sem CSP
h=h.replace('<link rel="stylesheet" href="./css/app.css"/>','<style>\n'+css+'\n</style>')
assert '<script src="./js/app.js"></script>' in h
h=h.replace('<script src="./js/app.js"></script>','<script>\n'+js+'\n</script>')
out=sys.argv[1] if len(sys.argv)>1 else os.path.join(root,'preview-standalone.html')
open(out,'w',encoding='utf-8').write(h);print('gerado',out,len(h),'bytes')
