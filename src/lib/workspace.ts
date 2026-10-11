/** "Guido Pallas" → "guido-pallas-cv" */
export function workspaceName(fullName: string) {
  const slug = fullName
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
  return `${slug}-cv`;
}
