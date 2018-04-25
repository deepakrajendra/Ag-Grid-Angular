
import { Component, OnInit } from '@angular/core';
import { GridApi, GridOptions, ColumnApi } from 'ag-grid';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from  '@angular/material';

import { Review } from '../../../shared/models/review.model';
import { ReviewService } from '../../../review.service';
import { DateRendererComponent } from '../../../date-renderer/date-renderer.component';
import { ActionsRendererComponent } from '../../../actions-renderer/actions-renderer.component';
import { GoalSettingDialogComponent } from '../goal-setting-dialog/goal-setting-dialog.component';

@Component({
  selector: 'app-reviews-summary',
  templateUrl: './reviews-summary.component.html',
  styleUrls: ['./reviews-summary.component.scss']
})

  export class ReviewsSummaryComponent implements OnInit {
 
  ngOnInit(){}
//drop down
selected: string ="1";
  
  //grid
  private reviews: Array<Review>;
  private gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];
  public defaultColDef:any;

  private api: GridApi;
  private columnApi: ColumnApi;
  private pageSize = 3;

  constructor(private reviewService: ReviewService, private dialog: MatDialog) {

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
    
    // this.gridOptions.columnApi.setColumnsVisible(["REVIEWEE"],true);
    // params.columnApi.setColumnsVisible(["reviewee"],true);
    
    // this.gridOptions.groupHeaderHeight=40;
    // this.gridOptions.floatingFiltersHeight=40;
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

 
  openModal(): void {
    let dialogRef = this.dialog.open(GoalSettingDialogComponent, {
      width: '100%',
      panelClass:'full-screen'
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

 
