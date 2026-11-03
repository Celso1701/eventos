#!/usr/bin/env python3
"""Gera preview-standalone.html (arquivo unico) a partir de github/index.html + css + js."""
import sys,os
root=sys.argv[1] if len(sys.argv)>1 else '.'
g=os.path.join(root,'github')
h=open(os.path.join(g,'index.html'),encoding='utf-8').read()
css=open(os.path.join(g,'css/app.css'),encoding='utf-8').read()
js=open(os.path.join(g,'js/app.js'),encoding='utf-8').read()
import re
h=re.sub(r'\s*<meta http-equiv="Content-Security-Policy"[^>]*>','',h)  # o arquivo único usa script embutido: sem CSP
h=h.replace('<link rel="stylesheet" href="./css/app.css"/>','<style>\n'+css+'\n</style>')
assert '<script src="./js/app.js"></script>' in h
h=h.replace('<script src="./js/app.js"></script>','<script>\n'+js+'\n</script>')
import base64
for nm in ('logo.png',):
    f=os.path.join(g,'assets/icons',nm)
    if os.path.exists(f):
        h=h.replace('./assets/icons/'+nm,'data:image/png;base64,'+base64.b64encode(open(f,'rb').read()).decode())
out=os.path.join(root,'preview-standalone.html')
open(out,'w',encoding='utf-8').write(h)
print('ok',len(h))
