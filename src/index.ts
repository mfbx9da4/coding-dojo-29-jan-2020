export class Robot {
  private slots: number[][]
  private blockToSlotIndices: Array<number>

  constructor(n: number) {
    this.slots = []
    this.blockToSlotIndices = []
    for (let i = 0; i < n; i++) {
      this.slots.push([i])
      this.blockToSlotIndices.push(i)
    }
  }

  getOutput(): number[][] {
    return this.slots
  }

  private getSlot(a: number): number {
    return this.blockToSlotIndices[a]
  }

  private reset = (a: number): void => {
    this.slots[a].push(a)
  }

  private removeStack(a: number): Array<number> {
    const slot = this.getSlot(a)
    const start = this.slots[slot].indexOf(a)
    return this.slots[slot].splice(start)
  }

  private pluck(a: number): number {
    const aboveAndA = this.removeStack(a)
    aboveAndA.slice(1).map(this.reset)
    return a
  }

  private putOver(newStack: number[], slotIndex: number): void {
    for (let i = 0; i < newStack.length; i++) {
      const block = newStack[i]
      this.blockToSlotIndices[block] = slotIndex
      this.slots[slotIndex].push(block)
    }
  }

  pileOver(a: number, b: number): void {
    const stackA = this.removeStack(a)
    const slotIndex = this.getSlot(b)
    this.putOver(stackA, slotIndex)
  }

  moveOver(a: number, b: number): void {
    this.pluck(a)
    this.putOver([a], this.getSlot(b))
  }

  pileOnto(a: number, b: number): void {
    const slot = this.getSlot(b)
    const index = this.slots[slot].indexOf(b)
    this.slots[slot].splice(index + 1).map(this.reset)
    this.pileOver(a, b)
  }
}
