export class Robot {
  private slots: number[][];
  private blockToSlotIndices: Array<number>;
  constructor(n: number) {
    this.slots = [];
    this.blockToSlotIndices = [];
    for (let i = 0; i < n; i++) {
      this.slots.push([i]);
      this.blockToSlotIndices.push(i);
    }
  }

  getOutput(): number[][] {
    return this.slots;
  }

  private getSlot(a: number): number {
    return this.blockToSlotIndices[a];
  }

  private remove(a: number): Array<number> {
    const slot = this.getSlot(a);
    const start = this.slots[slot].indexOf(a);
    return this.slots[slot].splice(start);
  }

  private putOver(newStack: number[], slotIndex: number): void {
    for (let i = 0; i < newStack.length; i++) {
      const block = newStack[i];
      this.blockToSlotIndices[block] = slotIndex;
      this.slots[slotIndex].push(block);
    }
  }

  pileOver(a: number, b: number): void {
    const stackA = this.remove(a);
    const slotIndex = this.getSlot(b);
    this.putOver(stackA, slotIndex);
  }
}

// export function main(input: string) {
//   const testCases = input.split("\n");
// }
