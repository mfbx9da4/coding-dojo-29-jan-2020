export default class Robot {
  private output: number[][];
  constructor(n: number) {
    this.output = [];
    for (let i = 0; i < n; i++) {
      this.output.push([i]);
    }
  }

  getOutput(): number[][] {
    return this.output;
  }
}
