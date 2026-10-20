import type { YearMonth } from "@/types/cv";

/** Meses desde el año 0, con fracción del mes en curso para "now". */
export function toMonths(value: YearMonth | "now", today: Date) {
  if (value === "now") return today.getFullYear() * 12 + today.getMonth() + today.getDate() / 31;
  const [year, month] = value.split("-").map(Number);
  return year * 12 + month - 1;
}

/** Escala lineal de meses a porcentaje del ancho del gráfico. */
export function monthScale(start: YearMonth, today: Date) {
  const from = toMonths(start, today);
  const to = toMonths("now", today);
  return (months: number) => ((months - from) / (to - from)) * 100;
}
