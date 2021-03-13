import { Injectable } from "@angular/core";

@Injectable()
export class TabsService {
  public tabs = [1, 2, 3];
  constructor() {}

  public dec() {
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc() {
    const insert = Math.max(...this.tabs) + 1;
    this.tabs = [...this.tabs, insert];
    return insert;
  }

  public remove(value: number) {
    const index = this.tabs.findIndex(tab => tab === value);
    if (index !== -1) {
      this.tabs = [...this.tabs.slice(0, index), ...this.tabs.slice(index + 1)];
    }
  }
}
