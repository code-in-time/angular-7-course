import { Component, OnInit, ViewChild } from '@angular/core';
import { AreaComponent } from '../area/area.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  counter: number = 5
  countOfAreaNumber = 0
  @ViewChild('child', {static: false}) child: AreaComponent;

  constructor() { }

  ngOnInit() {
    console.log(this.child, 'child')
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

  clickChildHandler() {
    console.log('yyyyyyy')
  }

}
