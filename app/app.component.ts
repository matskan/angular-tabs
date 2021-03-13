import { Component } from "@angular/core";
import { TabsService } from "./tabs/tabs.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private service: TabsService) {}

  public dec() {
    this.service.dec();
  }

  public inc() {
    this.service.inc();
  }

  get tabs() {
    return this.service.tabs;
  }

  get defaultIndex() {
    const index = this.service.first;
    return index == -1 ? 1 : index;
  }
}
