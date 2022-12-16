import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  totalHits=0;
  
  @Output()
  totalButtonCount=new EventEmitter();

  hitsCount(){
    this.totalHits+=1;
    this.totalButtonCount.emit(this.btnLable);
  }

  @Input()
  btnLable:Number=0;

}
