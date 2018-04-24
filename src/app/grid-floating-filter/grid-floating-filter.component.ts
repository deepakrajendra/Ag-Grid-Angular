import { Component, OnInit , AfterViewInit} from '@angular/core';
import { NgModel } from '@angular/forms';

import {IFloatingFilter, IFloatingFilterParams, SerializedTextFilter} from "ag-grid";
import {AgFrameworkComponent} from "ag-grid-angular";

export interface SliderFloatingFilterChange {
    model: SerializedTextFilter
}

export interface SliderFloatingFilterParams extends IFloatingFilterParams<SerializedTextFilter, SliderFloatingFilterChange> {
    // value: number
    // maxValue: number
}


@Component({
  selector: 'app-grid-floating-filter',
  templateUrl: './grid-floating-filter.component.html'
  // styleUrls: ['./grid-floating-filter.component.scss']
  // template: ``
})
export class GridFloatingFilterComponent  implements IFloatingFilter<SerializedTextFilter, SliderFloatingFilterChange, SliderFloatingFilterParams>, AgFrameworkComponent<SliderFloatingFilterParams>, AfterViewInit {
  private params: SliderFloatingFilterParams;
  public maxValue: number;
  public currentValue: string;

  agInit(params: SliderFloatingFilterParams): void {
      this.params = params;
      // this.maxValue = this.params.maxValue;
      this.currentValue = "";
  }

  valueChanged() {
      this.params.onFloatingFilterChanged({model: this.buildModel()});
  }

  ngAfterViewInit(): void {
      this.valueChanged();
  }

  onParentModelChanged(parentModel: SerializedTextFilter): void {
      if (!parentModel) {
          this.currentValue = "";
      } else {
          // note that the filter could be anything here, but our purposes we're assuming a greater than filter only,
          // so just read off the value and use that
          this.currentValue = parentModel.filter
      }
  }

  buildModel(): SerializedTextFilter {
      if (this.currentValue === "") {
          return null;
      }
      return {
          filterType: 'text',
          type: 'contains',
          filter: this.currentValue,
      };
  }

}
