/*
  Agrupa nombres de tecnologías que son "la misma" aunque estén escritos distinto,
  para pintarlas del mismo color: "Java 11" = "Java 8" = "Java EJB", "Springboot" = "Spring Boot".
*/

/** Palabras que son solo una versión: "3", "5.2", "v8". */
const VERSION = /^v?\d+$/;

/** Ángulo áureo: cada tecnología nueva queda lo más lejos posible, en color, de las anteriores. */
const GOLDEN_ANGLE = 137.508;
const FIRST_HUE = 200;

function words(name: string) {
  return name
    .toLowerCase()
    .split(/[\s._/-]+/)
    .filter((word) => word && !VERSION.test(word));
}

/**
 * Clave que identifica la tecnología. Si las primeras palabras coinciden con una
 * tecnología conocida ("Java EJB" → "java"), se usa esa; si no, el nombre sin versión.
 */
export function techKey(name: string, knownTechs: string[]) {
  const nameWords = words(name);
  const knownKeys = new Set(knownTechs.map((tech) => words(tech).join("")));
  for (let n = nameWords.length; n > 0; n--) {
    const candidate = nameWords.slice(0, n).join("");
    if (knownKeys.has(candidate)) return candidate;
  }
  return nameWords.join("");
}

/** Asigna un tono (0–360) a cada nombre, igual para todos los que son la misma tecnología. */
export function techHues(names: string[], knownTechs: string[]) {
  const hueByKey = new Map<string, number>();
  const hueByName = new Map<string, number>();

  for (const name of names) {
    const key = techKey(name, knownTechs);
    if (!hueByKey.has(key)) {
      hueByKey.set(key, Math.round((FIRST_HUE + hueByKey.size * GOLDEN_ANGLE) % 360));
    }
    hueByName.set(name, hueByKey.get(key)!);
  }
  return hueByName;
}
