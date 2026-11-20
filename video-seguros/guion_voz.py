#!/usr/bin/env python3
"""Genera guion_voz.md (indicaciones de locución) y tts/escena_NN.txt (texto listo para pegar en la IA de voz).
Lee el texto de escenas.json, así que si cambia el guion: python3 escenas.py && python3 guion_voz.py"""
import json, os, re

RAIZ = os.path.dirname(os.path.abspath(__file__))

# Cambios que se aplican siempre al texto para la IA: números y siglas que una voz sintética suele leer mal.
SIEMPRE = [
    (r"\b30\b", "treinta"), (r"\b24\b", "veinticuatro"), (r"\b2021\b", "dos mil veintiuno"),
    (r"\bCRM\b", "ce erre eme"), (r"\bIA\b", "i a"), (r"\bPDF\b", "pe de efe"), (r"\bAPI\b", "a pe i"),
    (r"[«»]", '"'), (r"\b(Ana|Pedro|María|Juan) [A-Z]\.", r"\1"),
]

# Solo si en la prueba la IA pronuncia mal: reemplazá la palabra por su escritura fonética.
FONETICA = [
    ("Claude", "Clod"), ("Cowork", "Cóuork"), ("Notion", "Nóushon"), ("Gmail", "Yi meil"), ("Drive", "Dráiv"),
    ("ManyChat", "Méni chat"), ("WhatsApp", "Guatsap"), ("Haiku", "Jáiku"), ("Sonnet", "Sónet"), ("Fable", "Féibol"),
    ("Chrome", "Crom"), ("deeplink", "dip link"), ("templates", "témpleits"), ("leads / lead", "lids / lid"),
    ("skill", "eskil"), ("plugins", "pláguins"), ("newsletters", "niusléters"), ("tokens", "tóquens"),
    ("Seeders Labs", "Síders Labs"), ("Seguros Flow", "Seguros Flou"), ("Business", "Bísnes"), ("full", "ful"),
]

# Indicaciones por escena: (intención, palabras a remarcar, nota de ritmo)
DIR = {
 1: ("Bienvenida cálida, como quien recibe a un colega. Sonrisa en la voz.", ["para vos", "No hace falta"], "Enumerá los temas del final con calma, una pausa corta en cada coma."),
 2: ("Presentación respetuosa, sin vender. Estás hablando de otra persona.", ["Federico Zolkwer", "sin perder el toque humano"], "Nombres propios despacio y claros."),
 3: ("Explicativo, ordenado. Cada modelo es un paso.", ["Haiku", "Sonnet", "Opus", "Fable", "con criterio"], "Pausa antes de cada nombre de modelo. Los ejemplos entre comillas, un poco más livianos."),
 4: ("Práctico, de consejo entre colegas.", ["tokens", "Configuración, Uso"], "Los tres consejos del final, con pausa entre cada uno."),
 5: ("Claro y comparativo.", ["Chat", "Cowork", "Code"], "Pausa marcada antes de cada modo."),
 6: ("Pausado: son tres conceptos nuevos.", ["proyecto", "memoria", "ventana de contexto", "finita"], "Pausa larga entre un concepto y el siguiente."),
 7: ("Entusiasmo contenido: esto ahorra trabajo.", ["una sola vez", "mismo estándar"], "La lista del ejemplo con ritmo, sin apurar."),
 8: ("Paso a paso, como si guiaras a alguien al lado tuyo.", ["cinco pasos", "autorizás"], "Pausa clara entre cada paso. Es la escena que más se va a pausar."),
 9: ("Descriptivo, tranquilo.", ["todo en uno", "leer, buscar y actualizar"], "Enumeración con ritmo parejo."),
 10: ("Concreto, mostrando un ejemplo real.", ["tu base de clientes"], "Los tres pedidos con tono de pregunta o pedido, como si los escribieras."),
 11: ("Advertencia amable. Serio, pero sin asustar.", ["Ojo", "solo lectura", "Permitir una vez", "vos"], "Pausa después de «Ojo con los permisos»."),
 12: ("Práctico.", ["Una", "Dos", "Tres", "usá copias"], "Pausa antes de cada número."),
 13: ("Honesto sobre un límite.", ["cuatro", "treinta", "doscientas", "no termina"], "Subí un poco la tensión de cuatro a doscientas páginas."),
 14: ("Tranquilizador: hay solución.", ["La primera", "La segunda", "enormes"], "Pausa entre las dos soluciones."),
 15: ("Regla simple, fácil de recordar.", ["de menos a más", "uno", "dos", "tres"], "Escalones con pausa, como subiendo."),
 16: ("Didáctico, sin apuro. Es lo más técnico del video.", ["en paralelo", "El primero", "El segundo"], "Más lento que el resto. Remate amable: «Pausá el video…»."),
 17: ("Una buena noticia: Claude trabaja solo.", ["tarea programada", "solo", "ya está listo"], "Las tres cosas de la lista, con pausa entre cada una."),
 18: ("Informativo.", ["buscar", "redactar", "etiquetar", "mismas reglas"], "La ruta de menús, despacio."),
 19: ("Firme en la regla final.", ["No lo envía", "dejalo en borrador", "Nunca"], "Pausa antes de «La regla»; la última frase, seria."),
 20: ("Imaginá que contás tu mañana.", ["todos los días", "urgente"], "El pedido entre comillas, como dictado."),
 21: ("Liviano, casi divertido: «basta de pelear con el buscador».", ["como a un asistente"], "Cada pedido es otra voz interna: cambiá apenas el tono."),
 22: ("Cierre de capítulo: integrar todo.", ["Notion", "Drive", "Gmail", "Tres herramientas, una sola tarea"], "La última frase, como remate."),
 23: ("Balanceado: virtudes y límites.", ["al instante", "Pero tiene límites", "derivar a una persona"], "Pausa clara antes de «Pero»."),
 24: ("Narrativo, como contando una charla.", ["lead caliente", "Menos tiempo preguntando, más tiempo vendiendo"], "Las respuestas del cliente («Corolla 2021», «Pocitos»), cortas y naturales."),
 25: ("Entusiasta: acá se conecta todo.", ["Y acá entra Claude", "rutina diaria"], "Pausa después de «Y acá entra Claude»."),
 26: ("Explicativo, simple.", ["deeplink", "Solo tocás enviar", "El envío sigue siendo tuyo"], "La última frase, lenta y clara."),
 27: ("Práctico, ejemplo concreto.", ["renovaciones del mes", "una skill", "una rutina mensual"], "Ritmo parejo."),
 28: ("Serio: hay un riesgo real.", ["riesgos muy distintos", "dar de baja el número", "El oficial"], "Pausa larga entre el camino no oficial y el oficial."),
 29: ("Firme y protector.", ["solo lo que necesita", "nunca toda la computadora", "sitio por sitio", "solo lectura"], "Pausa entre Cowork, Chrome y plugins."),
 30: ("Firme, de consejo final.", ["Uno", "Dos", "tres", "nunca se pegan en el chat"], "Pausa antes de cada número."),
 31: ("Cierre cálido y seguro. Como despedirte de un colega.", ["modelo justo", "permisos mínimos", "de menos a más", "siguen siendo tuyos"], "La última frase, lenta. Dejá un segundo de silencio al final."),
}

def para_ia(t):
    for a, b in SIEMPRE: t = re.sub(a, b, t)
    return t

def main():
    E = json.load(open(os.path.join(RAIZ, "escenas.json")))
    os.makedirs(os.path.join(RAIZ, "tts"), exist_ok=True)
    md = ["# Guion de locución — Claude para la venta de seguros\n",
          "Indicaciones para grabar la voz, sea con una IA o con tu propia voz. "
          "Cada escena tiene el texto exacto que tiene que decir el audio y su archivo `tts/escena_NN.txt`, listo para pegar.\n",
          "## Cómo tiene que sonar (todo el video)\n",
          "- **Personaje:** un colega que ya usa Claude y le explica a otro corredor, tomando un café. No es locutor de radio ni vendedor.",
          "- **Ritmo:** tranquilo, unas 150 palabras por minuto. Mejor un poco lento que apurado: el público no es técnico.",
          "- **Voseo natural, rioplatense:** «tenés», «usá», «fijate». Si la IA lo pronuncia como español neutro («tienes»), cambiá de voz o de modelo.",
          "- **Sonrisa en la voz** en ejemplos y buenas noticias; **tono firme, sin dramatismo**, en las advertencias (permisos, envío masivo, seguridad).",
          "- **Pausas:** un punto es una pausa corta y un punto y aparte, una pausa más larga. Los textos para la IA ya vienen puntuados para eso.",
          "- **Entre comillas** van pedidos a Claude: se leen como si los dictaras, apenas más livianos.\n",
          "## Cómo generar el audio con IA\n",
          "**Recomendación:** ElevenLabs con **tu voz clonada**, en un modelo multilingüe. Por qué: el video sigue sonando a vos y, si cambia una frase, la regenerás sin volver a grabar.\n",
          "1. Creá la cuenta. Para clonar tu voz hace falta un plan pago (el más barato alcanza; fijate el precio actual en su web).",
          "2. Clonado: subí 2 o 3 minutos tuyos hablando natural, con buena calidad y sin ruido. Leé, por ejemplo, la escena 01 y la 03 de este guion.",
          "3. Elegí un modelo **multilingüe** y tu voz clonada.",
          "4. Ajustes de partida (los nombres pueden cambiar en la interfaz): estabilidad media, alrededor de 50 %; similitud alta, alrededor de 75 %; exageración de estilo baja o en cero; velocidad normal.",
          "5. **Prueba primero:** generá solo la escena 01 y la 03, y escuchá cómo pronuncia los nombres en inglés. Si alguno falla, usá la tabla de pronunciación de abajo.",
          "6. Pegá cada `tts/escena_NN.txt` por separado y descargá el audio como **escena_NN.mp3**, con el mismo número.",
          "7. Mandame los 31 archivos por este chat.\n",
          "**Lo que la IA no hace bien, para que no te sorprenda:** a veces cambia la entonación de una pregunta, acentúa mal una palabra o mete una pausa rara. "
          "Escuchá cada escena antes de mandarla: regenerar una sola cuesta segundos.\n",
          "**Si preferís grabar vos:** usá las mismas indicaciones de cada escena y leé el «Texto», no la versión para la IA.\n",
          "## Tabla de pronunciación (usala solo si la IA se equivoca)\n",
          "En el `.txt` de la escena reemplazás la palabra por su escritura fonética. No lo hagas de entrada: los modelos multilingües suelen pronunciar bien estas palabras y la fonética a veces lo empeora.\n",
          "| Palabra | Escribí | | Palabra | Escribí |", "|---|---|---|---|---|"]
    for i in range(0, len(FONETICA), 2):
        a = FONETICA[i]; b = FONETICA[i + 1] if i + 1 < len(FONETICA) else ("", "")
        md.append(f"| {a[0]} | {a[1]} | | {b[0]} | {b[1]} |")
    md.append("\n**Zolkwer** (escena 02): confirmá con Federico cómo se pronuncia su apellido antes de generar.\n")
    md.append("Cambios que ya están hechos en los `.txt`: los números van en letras (treinta, veinticuatro, dos mil veintiuno) "
              "y las siglas deletreadas (ce erre eme, pe de efe, a pe i, i a).\n")
    cap = None
    for e in E:
        if e["cap"] != cap:
            cap = e["cap"]; md.append(f"\n---\n\n## {e['capitulo']}\n")
        intencion, enf, nota = DIR[e["n"]]
        ia = para_ia(e["texto"])
        open(os.path.join(RAIZ, "tts", f"escena_{e['n']:02d}.txt"), "w").write(ia + "\n")
        md += [f"### Escena {e['n']:02d}  ·  ~{round(e['habla_est'])} s  ·  archivo `escena_{e['n']:02d}.mp3`\n",
               f"- **Intención:** {intencion}",
               f"- **Remarcá:** {', '.join('«'+w+'»' for w in enf)}",
               f"- **Ritmo:** {nota}\n",
               f"**Texto:**\n\n> {e['texto']}\n"]
        if ia != e["texto"]:
            md.append(f"**Para la IA** (`tts/escena_{e['n']:02d}.txt`):\n\n> {ia}\n")
    open(os.path.join(RAIZ, "guion_voz.md"), "w").write("\n".join(md) + "\n")
    print("ok", len(E))

if __name__ == "__main__":
    main()
