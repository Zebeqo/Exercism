export function hey(message: string) {
  message = message.trim();
  const isSilence = message === "";
  const isQuestion = message.at(-1) === "?";
  const letters = [...message].filter((value) => value.match(/[a-z]/i));
  const isYell = letters.length
    ? letters.every((value) => value === value.toUpperCase())
    : false;

  if (isSilence) return "Fine. Be that way!";

  if (isQuestion && isYell) return "Calm down, I know what I'm doing!";

  if (isYell) return "Whoa, chill out!";

  if (isQuestion) return "Sure.";

  return "Whatever.";
}
