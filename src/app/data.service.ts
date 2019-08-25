import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

  sendAnEmail() {
    const opts =
      {
        "personalizations": [
          {
            "to": [
              {
                "email": "andrew.crawford.za@gmail.com"
              }
            ],
            "subject": "Hello, World!"
          }
        ],
        "from": {
          "email": "from_address@example.com"
        },
        "content": [
          {
            "type": "text/plain",
            "value": "Hello, World!"
          }
        ]
      }




    return this.http.post('https://api.sendgrid.com/v3/mail/send HTTP/1.1',
      opts,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': ''
        })
      }
    )
  }
}
