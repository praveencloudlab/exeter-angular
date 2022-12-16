import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4-parent-child';
  

  numbers=[5,10,20,-10,-5,-20];

  total=0;

  summary(msg:any){
    this.total=this.total+msg

    }







}
