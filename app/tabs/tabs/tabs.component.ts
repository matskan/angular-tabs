import { identifierModuleUrl } from "@angular/compiler";
import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input
} from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { TabsService } from "../tabs.service";

@Component({
  selector: "tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements AfterContentInit {
  activeTab: number;

  constructor(private service: TabsService) {}

  @Input() defaultIndex: number;

  @ContentChildren(TabComponent, { descendants: true }) items: QueryList<
    TabComponent
  >;

  ngAfterContentInit() {
    this.activeTab = this.defaultIndex;
  }

  get tabs() {
    return this.items.toArray();
  }

  get content() {
    const value = this.items.filter(item => item.key === this.activeTab);
    console.log("content");
    return value[0].body.template;
  }

  setActive(tab: TabComponent) {
    this.activeTab = tab.key;
  }

  isActive(tab: TabComponent) {
    return tab.key === this.activeTab;
  }

  getTitle(tab: TabComponent) {
    return tab.title.template;
  }

  createTab() {
    const index = this.service.inc();
    this.activeTab = index;
  }

  closeTab(tab: TabComponent) {
    this.service.remove(tab.key);
    if (tab.key === this.activeTab) {
      this.activeTab = this.service.first;
    }
  }
}
