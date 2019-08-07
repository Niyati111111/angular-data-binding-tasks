import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  constructor() { }

  @Output() valueChange = new EventEmitter<string>();

  public inputValue="";

  testCall(value) {
   this.inputValue = value;
   this.valueChange.emit(this.inputValue);
  }

}
