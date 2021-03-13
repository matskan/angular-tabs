import { identifierModuleUrl } from "@angular/compiler";
import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
  ViewChild,
  ElementRef
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

  @ViewChild("toolbar", { read: ElementRef, static: false })
  toolbar: ElementRef;

  ngAfterContentInit() {
    this.activeTab = this.defaultIndex;
  }

  get tabs() {
    return this.items.toArray();
  }

  get content() {
    const value = this.items.filter(item => item.key === this.activeTab);
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

  onScroll(event: WheelEvent) {
    const { scrollWidth, clientWidth } = this.toolbar.nativeElement;
    if (scrollWidth === clientWidth) {
      return;
    }

    console.log("wheel", scrollWidth, clientWidth);
    if (event.deltaY > 0) {
      this.toolbar.nativeElement.scrollLeft += 15;
    } else {
      this.toolbar.nativeElement.scrollLeft += -15;
    }
  }
}
