import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  counter: number = 5

  constructor() { }

  ngOnInit() {
  }

  countIt () {
    this.counter ++;
  }

  areaEmitHandler(name: string) {
    console.log(name)
  }

  count1ChangedHandler(count: number) {
    // this.ClickCounter = count;
    console.log(count);
  }

}
