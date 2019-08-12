import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


interface RootObject {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data?: Datum[];
}

interface Datum {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1StyleBool = true;
  users: RootObject;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

  firstClick() {
    console.log('test')
    this.h1StyleBool = !this.h1StyleBool;
    this.data.firstClickTest()
  }

}
