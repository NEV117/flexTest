import { Component, Input, OnInit } from '@angular/core';
import * as Flexmonster from 'flexmonster';

@Component({
  selector: 'app-export-lloreda',
  templateUrl: './export-lloreda.component.html',
  styleUrls: ['./export-lloreda.component.css']
})
export class ExportLloredaComponent implements OnInit {
  @Input() jsonData: any;

  constructor() { }

  ngOnInit(): void {
    const pivot = new Flexmonster({
      container: 'pivotContainer',
      componentFolder: 'node_modules/flexmonster/',
      toolbar: true,
      report: {
        dataSource: {
          type: 'json',
          data: this.jsonData 
        },
        options: {
          grid: {
            type: "flat",
            showTotals: "off",
            showGrandTotals: "off"
          },
        }
      },
      global: {
        localization: "https://cdn.flexmonster.com/loc/es.json" 
      },
      beforetoolbarcreated: customizeToolbar
    });
  }

}

function customizeToolbar(toolbar: any) {
  let tabs = toolbar.getTabs();
  const tabsToRemove = ['fm-tab-connect', 'fm-tab-open','fm-tab-save', 'fm-tab-data', 'fm-tab-config'];
  tabs = tabs.filter((tab: any) => !tabsToRemove.includes(tab.id));
  toolbar.getTabs = function () {
    return tabs;
  };
}