import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendEmailService } from './../../../services/sendemail.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})



export class BetaComponent {
	constructor(private sendEmailService: SendEmailService) {}
  @ViewChild('f') demoForm: NgForm;
	submitted = false;

	user = {
    firstname: '',
    lastname: '',
    email: ''
  };

	onSubmit() {
    this.submitted = true;
    this.user.firstname = this.demoForm.value.userData.firstname;
    this.user.lastname = this.demoForm.value.userData.lastname;
    this.user.email = this.demoForm.value.userData.email;
    this.sendEmailService.sendEmailForBeta(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    //this.sendEmailService.sendEmail(this.user);
    this.demoForm.reset();
	}

}
