export function commands(num: number) {
  const actionList = ["wink", "double blink", "close your eyes", "jump"];
  const secret = num.toString(2);

  const action: string[] = [];

  const secretArr = Array.from(secret).reverse();
  secretArr.slice(0, 4).forEach((value, index) => {
    if (value === "1") {
      action.push(actionList[index]);
    }
  });
  if (secretArr[4] === "1") {
    action.reverse();
  }

  return action;
}
