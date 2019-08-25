import { Component, OnInit, Input, Output, } from '@angular/core';
import TodoItem from "../../models/TodoItem";
import { DataService } from '../data.service'

@Component({
  selector: 'app-page-todo',
  templateUrl: './page-todo.component.html',
  styleUrls: ['./page-todo.component.scss']
})
export class PageTodoComponent implements OnInit {

  listLeft = [new TodoItem(0, 'txt1'), new TodoItem(1, 'txt2'),new TodoItem(2, 'txt3'), new TodoItem(3, 'txt4')]
  listRight = []

  constructor(private data: DataService) { }

  ngOnInit() {
    // console.log(this.listLeft, 'this.listLeft')
    // this.listLeft[0].id
    // console.log(this.listLeft, 'this.listLeft')
  }

  btnLeftEmitHandler(id: number) {
    console.log(id, 'btn click')
    const itemFound = this.listLeft.find((v: any, i: number) => v.id === id)
    this.listRight.push(itemFound)
    this.listLeft = this.listLeft.filter(v => v.id !== id)
  }

  btnRightEmitHandler(id: number) {
    console.log(id, 'btn click')
    const itemFound = this.listRight.find((v: any, i: number) => v.id === id)
    this.listLeft.push(itemFound)
    this.listRight = this.listRight.filter(v => v.id !== id)
  }

  btnSendEmail() {
    this.data.sendAnEmail().subscribe(data => {
      console.log(data, 'data');
    })
  }

}
