export class Clock {
  private count: number = 0;
  public tick: number = 0;

  public Tick(): void {
    this.count++;
    this.tick = this.count;
  }

  public getTick(): number {
    return this.count;
  }

  public setTick(value: number): void {
    this.count = value;
    this.tick = value;
  }
}