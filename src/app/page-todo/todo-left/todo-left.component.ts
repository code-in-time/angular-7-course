import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-left',
  templateUrl: './todo-left.component.html',
  styleUrls: ['./todo-left.component.scss']
})
export class TodoLeftComponent implements OnInit {

  @Input() listLeft: any
  @Input() listRight: any

  @Output() btnLeftEmitEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnLeftHandler(id: number) {
    var s = id
    this.btnLeftEmitEvent.emit(id)
  }

}
