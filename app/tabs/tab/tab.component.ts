import { Component, OnInit, ContentChild, Input } from "@angular/core";
import { TabContentComponent } from "../tab-content/tab-content.component";
import { TabTitleComponent } from "../tab-title/tab-title.component";

@Component({
  selector: "tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.css"]
})
export class TabComponent implements OnInit {
  @Input() key: number;

  @ContentChild(TabTitleComponent, { static: false })
  private titleItem: TabTitleComponent;

  @ContentChild(TabContentComponent, { static: false })
  private contentItem: TabContentComponent;

  ngOnInit() {}

  get title() {
    return this.titleItem;
  }

  get body() {
    return this.contentItem;
  }
}
