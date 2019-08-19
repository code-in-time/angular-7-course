import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  // inputs: ['count']
})
export class AreaComponent implements OnInit {

  // The Child Component expects the count to come from the Parent Component. Hence in ChildComponent decorate the count property with @Input decorator
  @Input() count: number;

  @Output() count1: EventEmitter<number> = new EventEmitter();
  @Output() areaNameEmit: EventEmitter<string> = new EventEmitter();

  myAreaSum: number = 0;

  constructor() { }

  ngOnInit() {
  }

  showAreaName() {
    this.areaNameEmit.emit('name1');
    console.log('click')
  }


  countTheArea() {
    this.myAreaSum = this.count + Math.random()
    this.areaNameEmit.emit('name1');
  }

}
