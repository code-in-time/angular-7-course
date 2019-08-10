import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1StyleBool:Boolean= true

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    console.log('test')
    this.h1StyleBool = !this.h1StyleBool
  }

}
