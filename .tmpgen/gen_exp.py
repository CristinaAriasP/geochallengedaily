import json, os, re, sys, urllib.request
from concurrent.futures import ThreadPoolExecutor
KEY=os.environ["LOVABLE_API_KEY"]; URL="https://ai.gateway.lovable.dev/v1/chat/completions"
SYS="""Escribes UNA pista de dificultad "experto" para un juego de adivinar países.
REGLAS: nunca menciones el nombre del país, su gentilicio, su capital ni sus vecinos.
Debe ser un dato histórico, geográfico o estadístico muy oscuro y verificable. Exactamente 1-2 frases. Números en palabras.
Estilo unificado y directo, empezando siempre por un hecho, sin "Este país..." repetido.
Responde SOLO JSON: {"items":[{"name":"<es>","text_es":"...","text_en":"..."}]}"""
def call(b):
    body=json.dumps({"model":"google/gemini-2.5-flash","messages":[{"role":"system","content":SYS},{"role":"user","content":"Países (español|inglés):\n"+"\n".join(f"{a}|{c}" for a,c in b)}]}).encode()
    req=urllib.request.Request(URL,data=body,headers={"Authorization":f"Bearer {KEY}","Content-Type":"application/json"})
    for i in range(5):
        try:
            with urllib.request.urlopen(req,timeout=600) as r: d=json.loads(r.read())
            t=re.sub(r"^```(?:json)?|```$","",d["choices"][0]["message"]["content"].strip(),flags=re.M).strip()
            return json.loads(t)["items"]
        except Exception as e: print("retry",i,b[0][0],e,flush=True)
    return []
pairs=[tuple(l.split("|")) for l in open(sys.argv[1]).read().strip().split("\n")]
B=[pairs[i:i+3] for i in range(0,len(pairs),3)]
res=[]
with ThreadPoolExecutor(max_workers=1) as ex:
    for r in ex.map(call,B): res.extend(r)
print("got",len(res),"of",len(pairs))
json.dump(res,open(sys.argv[2],"w"),ensure_ascii=False,indent=1)
