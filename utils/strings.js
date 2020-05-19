export const formatTitle = (title) => {
  return removeDiacriticCharacters(title)
    .toLowerCase()
    .replace(/[^\w\-]+/g, "-");
};

export function removeDiacriticCharacters(text) {
  return text
    .replace(/À|Á|Â|Ã|Ä|Å/g, "A")
    .replace(/à|á|â|ã|ä|å/g, "a")
    .replace(/Ò|Ó|Ô|Õ|Õ|Ö|Ø/g, "O")
    .replace(/ò|ó|ô|õ|ö|ø/g, "o")
    .replace(/È|É|Ê|Ë/g, "E")
    .replace(/è|é|ê|ë/g, "e")
    .replace(/Ç|ç/g, "c")
    .replace(/Ì|Í|Î|Ï/g, "I")
    .replace(/ì|í|î|ï/g, "i")
    .replace(/Ù|Ú|Û|Ü/g, "U")
    .replace(/ù|ú|û|ü/g, "u");
}
