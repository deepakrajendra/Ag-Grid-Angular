
import { Component, OnInit } from '@angular/core';
import { GridApi, GridOptions, ColumnApi } from 'ag-grid';
import { ActivatedRoute } from '@angular/router';

import { RefData } from '../shared/models/ref-data';
import { Review } from '../shared/models/review.model';
import { ReviewService } from '../review.service';
import { DateRendererComponent } from '../date-renderer/date-renderer.component';
import { ActionsRendererComponent } from '../actions-renderer/actions-renderer.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
 
  ngOnInit(){}
//drop down
  constructor(private reviewService: ReviewService, private route: ActivatedRoute ) {

    console.log(this.route);
   }

}
