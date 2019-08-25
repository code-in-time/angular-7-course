import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-right',
  templateUrl: './todo-right.component.html',
  styleUrls: ['./todo-right.component.scss']
})
export class TodoRightComponent implements OnInit {

  @Input() listLeft: any
  @Input() listRight: any

  @Output() btnRightEmitEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

    var s = this.listRight
  }

  btnRightHandler(id: number) {
    var s = id
    this.btnRightEmitEvent.emit(id)
  }

}
