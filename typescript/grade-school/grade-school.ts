export class GradeSchool {
  #roaster: Record<number, string[]> = {};
  roster() {
    return JSON.parse(JSON.stringify(this.#roaster));
  }

  add(name: string, grade: number) {
    this.#roaster = Object.fromEntries(
      Object.entries(this.#roaster).map(([key, value]) => [
        key,
        value.filter((v) => v !== name),
      ])
    );

    if (grade in this.#roaster) {
      this.#roaster[grade].push(name);
      this.#roaster[grade].sort();
    } else {
      this.#roaster = { ...this.#roaster, [grade]: [name] };
    }
  }

  grade(gradeNum: number) {
    if (this.#roaster[gradeNum]) {
      return [...this.#roaster[gradeNum]];
    }
    return [];
  }
}
