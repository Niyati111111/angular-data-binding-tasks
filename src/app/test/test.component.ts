import { Component, Input } from '@angular/core';
import{ AppComponent } from '../app.component'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Input() dynamicData: string;

  constructor() { }

}
