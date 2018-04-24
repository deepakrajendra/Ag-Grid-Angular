
import { Component, OnInit } from '@angular/core';
import { GridApi, GridOptions, ColumnApi } from 'ag-grid';

import { Review } from '../../../shared/models/review.model';
import { ReviewService } from '../../../review.service';
import { DateRendererComponent } from '../../../date-renderer/date-renderer.component';
import { ActionsRendererComponent } from '../../../actions-renderer/actions-renderer.component';

@Component({
  selector: 'app-review-overview',
  templateUrl: './review-overview.component.html',
  styleUrls: ['./review-overview.component.scss']
})
export class ReviewOverviewComponent implements OnInit {

  ngOnInit(){}
//drop down
selected: string ="1";
  
  //grid
  private reviews: Array<Review>;
  private gridOptions: GridOptions;
  //  private icons: any;
  public rowData: any[];
  public columnDefs: any[];
  public defaultColDef:any;
  //  public rowCount: string;

  private api: GridApi;
  private columnApi: ColumnApi;
  private pageSize = 2;

  constructor(private reviewService: ReviewService) {

    this.reviews = this.reviewService.getReviews();
    this.gridOptions = <GridOptions>{};
    this.rowData = this.createRowData();
    this.columnDefs = this.createColumnDefs();

  }

  // k

  private onReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.gridOptions.api.sizeColumnsToFit();
    this.gridOptions.headerHeight=40;
    
    this.defaultColDef=
      {
      width: 100,
      headerComponentParams : {
      template:
          '<div class="ag-cell-label-container" role="presentation">' +
          '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
          '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
          '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order" ></span>' +
          '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" ></span>' +
          '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" ></span>' +
          '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon" ></span>' +
          '    ** <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
          '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
          '  </div>' +
          '</div>'
      }
    // this.gridOptions.angularCompileHeaders=true;
  }
}

  private createRowData() {
    const rowData = this.reviews;
    return rowData;
  }

  private createColumnDefs() {

    const columnDefs = [
      {
        headerName: 'REVIEWEE',
        field: 'reviewee',
        headerCheckboxSelection: true,
        checkboxSelection:true,
          filter:"agTextColumnFilter",
          suppressFilter: true
      },
      {
        headerName: 'SELECTION DUE ON',
        field: 'selectionDueOn',
        cellRendererFramework: DateRendererComponent,
        suppressFilter: true,
        valueGetter: this.getDateDetails
      },
      {
        headerName: 'REVIEWERS NOMINATED',
        field: 'reviewersNominated',
        valueFormatter: this.concatReviewers,
        filter: "agTextColumnFilter"
      },
      {
        headerName: 'STATUS',
        field: 'status',
        suppressFilter: true
        
      },
      {
        headerName: 'WAITING ON',
        field: 'waitingOn',
        suppressFilter: true
      },
      {
        headerName:'ACTIONS',
        suppressFilter: true,
        suppressSorting:true,
        cellRendererFramework:ActionsRendererComponent
      }
    ];
    return columnDefs;
  }

  concatReviewers(params: any) {
    var reviewers = "";
    if (params.value.length < 3) {
      return params.value.join(', ');
    }
    else {
      reviewers = params.value[0] + ',' + params.value[1] + ' +' + (params.value.length - 2) + ' others';
      return reviewers;
    }
  }

  getDateDetails(params:any){
    return [params.data.selectionDueOn];
  }

  filterGrid(filterText: string) {
    this.gridOptions.api.setQuickFilter(filterText);
  }
}
