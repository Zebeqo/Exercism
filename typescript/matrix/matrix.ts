export class Matrix {
  rowsMatrix: number[][];
  columnsMatrix: number[][];
  constructor(matrixStr: string) {
    this.rowsMatrix = matrixStr
      .split("\n")
      .map((value) => value.split(" ").map((v) => Number(v)));

    const columnsMatrix = [];

    for (let i = 0; i < this.rowsMatrix[0].length; i++) {
      const column: number[] = [];
      this.rowsMatrix.forEach((value, index, array) =>
        column.push(array[index][i])
      );
      columnsMatrix.push(column);
    }

    this.columnsMatrix = columnsMatrix;
  }

  get rows() {
    return this.rowsMatrix;
  }

  get columns() {
    return this.columnsMatrix;
  }
}

// another solution
export class Matrix_ {
  input: string;
  constructor(input: string) {
    this.input = input;
  }
  get rows(): number[][] {
    return this.input
      .split("\n")
      .map((x) => x.split(" "))
      .map((x) => x.map((x) => +x));
  }
  get columns(): number[][] {
    let matrix = this.rows;
    let cols: number[][] = [];
    for (let i = 0; i < matrix[0].length; i++) {
      cols[i] = matrix.map((x) => x[i]);
    }
    return cols;
  }
}
