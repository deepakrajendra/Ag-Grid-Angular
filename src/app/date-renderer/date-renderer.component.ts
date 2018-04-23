import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-renderer',
  templateUrl: './date-renderer.component.html',
  styleUrls: ['./date-renderer.component.scss']
})
export class DateRendererComponent implements OnInit {

  private params:any;
  private isStartedOnAvailable:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  agInit(params:any): void{
    this.params= params;
    if(this.params.value[1]){
      this.isStartedOnAvailable=true;
    }
  }

}
