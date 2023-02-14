export const dnaToRnaMap = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(dna: string) {
  return Array.from(dna)
    .map((value, index, array) => {
      if (!Object.keys(dnaToRnaMap).includes(value)) {
        throw new Error("Invalid input DNA.");
      }
      return dnaToRnaMap[value as keyof typeof dnaToRnaMap];
    })
    .join("");
}

// another solution
export const nuc_map: { [key: string]: string } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};
export function toRna_(DNA: string): string {
  return [...DNA].reduce((output, letter) => {
    if (!Object.keys(nuc_map).includes(letter))
      throw Error("Invalid input DNA.");
    output += nuc_map[letter];
    return output;
  }, "");
}
