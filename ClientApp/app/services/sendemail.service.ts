import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SendEmailService {

  constructor(private http: Http) { }

  sendEmail(user:any) {
    return this.http.post('/api/sendemail', user);
    //console.log(user);
  }

}
