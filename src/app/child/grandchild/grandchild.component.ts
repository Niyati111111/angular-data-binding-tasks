import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent {

  constructor() { }

  @Output() valueChange = new EventEmitter<string>();

  public inputValue="";

  testCall(value) {
   this.inputValue = value;
   this.valueChange.emit(this.inputValue);
  }

}
