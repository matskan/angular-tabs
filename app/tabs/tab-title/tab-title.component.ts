import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "tab-title",
  templateUrl: "./tab-title.component.html",
  styleUrls: ["./tab-title.component.css"]
})
export class TabTitleComponent implements OnInit {
  constructor() {}
  @ViewChild("titleTemplate", { static: false }) template: TemplateRef<any>;
  ngOnInit() {}
}
