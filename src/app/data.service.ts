import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClickTest() {
    return console.log('firstClick test')
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
}