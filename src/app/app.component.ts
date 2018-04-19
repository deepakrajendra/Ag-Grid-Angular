import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
 items:Array<string>=["item 1","item 2","item 3"];
 today:any = new Date();
 userName:string="User name"
}
