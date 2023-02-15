export function isPangram(str: string) {
  const set = new Set([...str.toLowerCase()]);
  set.forEach((value) => {
    if (/[a-z]/.test(value)) {
      return;
    }
    set.delete(value);
  });
  return set.size === 26;
}

// another solution
export function isPangram_(sentence: string): boolean {
  sentence = sentence.toLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every((c) => sentence.includes(c));
}
