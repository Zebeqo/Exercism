export const letterGenerator = () =>
  Math.floor(Math.random() * 26 + 10)
    .toString(36)
    .toUpperCase();

export const numberGenerator = () => Math.floor(Math.random() * 10);

export class Robot {
  _name: string;
  static lastName = "";
  static namePool = new Set<string>();
  constructor() {
    this._name = this.generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateName();
  }

  public static releaseNames(): void {
    Robot.namePool = new Set<string>();
  }

  public static areSequential = (name1: string, name2: string): boolean => {
    const alpha1 = name1.substring(0, 2);
    const alpha2 = name2.substring(0, 2);
    const num1 = Number(name1.substring(2, 3));
    const num2 = Number(name2.substring(2, 3));

    const numDiff = num2 - num1;
    const alphaDiff =
      (alpha2.charCodeAt(0) - alpha1.charCodeAt(0)) * 26 +
      (alpha2.charCodeAt(1) - alpha1.charCodeAt(1));

    const totalDiff = alphaDiff * 1000 + numDiff;

    return Math.abs(totalDiff) <= 1;
  };

  public generateName(): string {
    for (;;) {
      const name = `${letterGenerator()}${letterGenerator()}${numberGenerator()}${numberGenerator()}${numberGenerator()}`;
      if (
        !Robot.namePool.has(name) &&
        !Robot.areSequential(Robot.lastName, name)
      ) {
        Robot.namePool.add(name);
        Robot.lastName = name;
        return name;
      }
    }
  }
}
