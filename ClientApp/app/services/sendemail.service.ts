import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SendEmailService {

  constructor(private http: Http) { }

  sendEmailForDemo(user:any) {
    return this.http.post('/api/sendemailfordemo', user);
    //console.log(user);
  }
  
  sendEmailForBeta(user:any) {
    return this.http.post('/api/sendemailforbeta', user);
  }

}
