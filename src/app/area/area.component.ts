import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  // The Child Component expects the count to come from the Parent Component. Hence in ChildComponent decorate the count property with @Input decorator
  @Input() count: number;
  myAreaSum: number = 0;

  constructor() { }

  ngOnInit() {
  }

  countTheArea() {
    this.myAreaSum = this.count + Math.random()
  }

}
