import { Injectable } from "@angular/core";

@Injectable()
export class TabsService {
  public tabs = [1, 2, 3];
  constructor() {}

  public dec() {
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc() {
    const max = this.tabs.length ? Math.max(...this.tabs) : 0;
    this.tabs = [...this.tabs, max + 1];
    return max + 1;
  }

  public remove(value: number) {
    const index = this.tabs.findIndex(tab => tab === value);
    if (index !== -1) {
      this.tabs = [...this.tabs.slice(0, index), ...this.tabs.slice(index + 1)];
    }
  }

  public get first() {
    return this.tabs.length ? this.tabs[0] : -1;
  }
}
