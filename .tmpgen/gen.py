import json, os, re, sys, urllib.request
from concurrent.futures import ThreadPoolExecutor

KEY = os.environ["LOVABLE_API_KEY"]
URL = "https://ai.gateway.lovable.dev/v1/chat/completions"

SYS = """Eres un redactor de pistas para un juego diario de adivinar países (tipo Wordle geográfico).
Para cada país te dan el nombre en español e inglés. Devuelves 4 pistas bilingües, de más difícil a más fácil.

REGLAS ESTRICTAS:
- NUNCA menciones el nombre del país, su gentilicio, ni el nombre de su capital en las pistas "expert", "hard" ni "medium".
- La pista "easy" SÍ puede mencionar la capital y países vecinos, pero NUNCA el nombre del país.
- expert: dato histórico/geográfico/estadístico muy oscuro, 1-2 frases.
- hard: cultura general avanzada (historia, política, lengua, economía).
- medium: rasgo reconocible (geografía, gastronomía, deporte, naturaleza).
- easy: ubicación clara, vecinos, capital y/o descripción de la bandera.
- Escribe los números en palabras, no en dígitos.
- Cada pista: 1-3 frases. Español natural e inglés natural (no traducción literal robótica).

Responde SOLO con JSON válido, sin markdown, con esta forma:
{"countries":[{"name":"<es>","name_en":"<en>","hints":[{"difficulty":"expert","text_es":"...","text_en":"..."},{"difficulty":"hard",...},{"difficulty":"medium",...},{"difficulty":"easy",...}]}]}"""


def call(batch):
    lines = "\n".join(f"{a}|{b}" for a, b in batch)
    body = json.dumps({
        "model": "google/gemini-2.5-flash",
        "messages": [
            {"role": "system", "content": SYS},
            {"role": "user", "content": "Países (español|inglés):\n" + lines},
        ],
    }).encode()
    req = urllib.request.Request(URL, data=body, headers={
        "Authorization": f"Bearer {KEY}", "Content-Type": "application/json"})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=600) as r:
                data = json.loads(r.read())
            txt = data["choices"][0]["message"]["content"]
            txt = re.sub(r"^```(?:json)?|```$", "", txt.strip(), flags=re.M).strip()
            out = json.loads(txt)["countries"]
            assert all(len(c["hints"]) == 4 for c in out), "bad hints"
            return out
        except Exception as e:
            print(f"retry {attempt} {batch[0][0]}: {e}", flush=True)
    return []


pairs = [tuple(l.split("|")) for l in open(sys.argv[1]).read().strip().split("\n")]
SIZE = 2
batches = [pairs[i:i + SIZE] for i in range(0, len(pairs), SIZE)]
results = []
with ThreadPoolExecutor(max_workers=6) as ex:
    for r in ex.map(call, batches):
        results.extend(r)
print("got", len(results), "of", len(pairs))
json.dump(results, open(sys.argv[2], "w"), ensure_ascii=False, indent=1)
