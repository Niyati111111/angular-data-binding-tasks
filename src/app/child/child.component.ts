import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  constructor() { }

  
  @Output() valueChange = new EventEmitter<string>();

  public inputValue="";

  displayInput($event) {
   this.inputValue = $event;
   this.valueChange.emit(this.inputValue);
  }

}
