import { Component, OnInit } from '@angular/core';
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

  btnLeftListItemClick(id: number) {
    console.log(id, 'byn click')
    const itemFound = this.listLeft.find((v: any, i: number) => v.id === id)
    this.listRight.push(itemFound)
    this.listLeft = this.listLeft.filter(v => v.id !== id)
  }

  btnRightListItemClick(id: number) {
    console.log(id, 'byn click')
    const itemFound = this.listRight.find((v: any, i: number) => v.id === id)
    this.listLeft.push(itemFound)
    this.listRight = this.listRight.filter(v => v.id !== id)
  }

  btnSendEmail() {
    // https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html
    // // using Twilio SendGrid's v3 Node.js Library
    // // https://github.com/sendgrid/sendgrid-nodejs
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey('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');
    // const msg = {
    //   to: 'andrew.crawford.za@gmail.com',
    //   from: 'test@example.com',
    //   subject: 'Sending with Twilio SendGrid is Fun',
    //   text: 'and easy to do anywhere, even with Node.js',
    //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // };
    // sgMail.send(msg);

    this.data.sendAnEmail().subscribe(data => {
      console.log(data, 'data');
    })
  }

}
