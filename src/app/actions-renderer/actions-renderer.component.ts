import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-renderer',
  templateUrl: './actions-renderer.component.html',
  styleUrls: ['./actions-renderer.component.scss']
})
export class ActionsRendererComponent implements OnInit {

  private params:any;
  constructor() { }

  ngOnInit() {
  }

  agInit(params:any):void{
this.params= params;
  }
}
