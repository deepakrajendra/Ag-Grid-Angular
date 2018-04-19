import { Component } from '@angular/core';
import { GridApi, GridOptions, ColumnApi } from 'ag-grid';

import { RefData } from './shared/models/ref-data';
import { Review } from './shared/models/review.model';
import { ReviewService } from './review.service';
import { DateRendererComponent } from './date-renderer/date-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  items: Array<string> = ["item 1", "item 2", "item 3"];
  today: any = new Date();
  userName: string = "User name"

  
  //grid
  private reviews: Array<Review>;
  private gridOptions: GridOptions;
  //  private icons: any;
  public rowData: any[];
  public columnDefs: any[];
  //  public rowCount: string;

  private api: GridApi;
  private columnApi: ColumnApi;


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
    // this.gridOptions.angularCompileHeaders=true;
  }

  private createRowData() {
    const rowData = this.reviews;



    // for (let i = 0; i < 200; i++) {
    //   const countryData = RefData.countries[i % RefData.countries.length];
    //   rowData.push({
    //       name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
    //       skills: {
    //           android: Math.random() < 0.4,
    //           html5: Math.random() < 0.4,
    //           mac: Math.random() < 0.4,
    //           windows: Math.random() < 0.4,
    //           css: Math.random() < 0.4
    //       },
    //       dob: RefData.DOBs[i % RefData.DOBs.length],
    //       address: RefData.addresses[i % RefData.addresses.length],
    //       years: Math.round(Math.random() * 100),
    //       proficiency: Math.round(Math.random() * 100),
    //       country: countryData.country,
    //       continent: countryData.continent,
    //       language: countryData.language,
    //       mobile: '123123',
    //       landline: '123123'
    //   });
    // }


    return rowData;
  }

  private createColumnDefs() {
    // const columnDefs = [
    //     {
    //         headerName: '#',
    //         width: 30,
    //         height:48,
    //         checkboxSelection: true,
    //         suppressSorting: true,
    //         suppressMenu: true,
    //         pinned: true
    //     },
    //     {
    //         headerName: 'Employee',
    //         children: [
    //             {
    //                 headerName: "Name",
    //                 field: "name",
    //                 width: 150,
    //                 height:48,
    //                 pinned: true
    //             },
    //             {
    //                 headerName: "Country",
    //                 field: "country",
    //                 width: 150,
    //                 // an example of using a non-React cell renderer
    //                 // cellRenderer: countryCellRenderer,
    //                 pinned: true,
    //                 filter: 'set',
    //                 filterParams: {
    //                     // cellRenderer: countryCellRenderer,
    //                     cellHeight: 20
    //                 },
    //                 cellEditor: 'agRichSelect',
    //                 cellEditorParams: {
    //                     values: ["Argentina", "Brazil", "Colombia", "France", "Germany", "Greece", "Iceland", "Ireland",
    //                         "Italy", "Malta", "Portugal", "Norway", "Peru", "Spain", "Sweden", "United Kingdom",
    //                         "Uruguay", "Venezuela", "Belgium", "Luxembourg"],
    //                     // cellRenderer: countryCellRenderer,
    //                 },
    //                 editable: true
    //             },
    //             {
    //                 headerName: "Date of Birth",
    //                 field: "dob",
    //                 width: 110,
    //                 pinned: true,
    //                 // cellRenderer: function (params) {
    //                 //     return pad(params.value.getDate(), 2) + '/' +
    //                 //         pad(params.value.getMonth() + 1, 2) + '/' +
    //                 //         params.value.getFullYear();
    //                 // },
    //                 filter: 'date',
    //                 columnGroupShow: 'open'
    //             }
    //         ]
    //     },
    //     {
    //         headerName: "Proficiency",
    //         field: "proficiency",
    //         width: 135,
    //         // supply an angular component
    //         // cellRendererFramework: ProficiencyCellRenderer
    //     },
    //     {
    //         headerName: 'Contact',
    //         children: [
    //             {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
    //             {headerName: "Landline", field: "landline", width: 150, filter: 'text'},
    //             {headerName: "Address", field: "address", width: 500, filter: 'text'}
    //         ]
    //     }
    // ];

    const columnDefs = [
      {
        headerName: 'REVIEWEE',
        field: 'reviewee',
        headerCheckboxSelection: true,
        checkboxSelection:true,
          filter:"agTextColumnFilter",
          height:48
      },
      {
        headerName: 'SELECTION DUE ON',
        field: 'selectionDueOn',
        cellRendererFramework: DateRendererComponent
      },
      // {
      //   headerName: 'REVIEWERS NOMINATED',
      //   field: 'reviewersNominated',
      //   valueFormatter: this.concatReviewers,
      //   filter: "agTextColumnFilter"
      // },
      {
        headerName: 'STATUS',
        field: 'status'
      },
      {
        headerName: 'WAITING ON',
        field: 'waitingOn'
      }

    ];


    return columnDefs;
  }

  // k 

  concatReviewers(params: any) {
    var reviewers = "";
    if (params.value.length < 3) {
      return params.value.join(',');
    }
    else {
reviewers = params.value[0]+','+params.value[1]+' +'+ (params.value.length-2)+' others';
return reviewers;
    }
  }

}
