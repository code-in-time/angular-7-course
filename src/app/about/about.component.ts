import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  counter: number = 5
  countOfAreaNumber = 0

  constructor() { }

  ngOnInit() {
  }

  countIt () {
    this.counter ++;
  }

  areaEmitHandler(name: string) {
    console.log(name)
  }

  countOfAreaHandler(x: number) {
    // this.ClickCounter = count;
    console.log(x);
    this.countOfAreaNumber = x
  }

}
