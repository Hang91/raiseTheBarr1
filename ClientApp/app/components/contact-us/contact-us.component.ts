import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendEmailService } from './../../services/sendemail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private sendEmailService: SendEmailService) {}

  @ViewChild('f') contactForm: NgForm;
	submitted = false;

	user = {
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  };

	onSubmit() {
	    this.submitted = true;
	    this.user.firstname = this.contactForm.value.userData.firstname;
	    this.user.lastname = this.contactForm.value.userData.lastname;
	    this.user.email = this.contactForm.value.userData.email;
	    this.user.message = this.contactForm.value.userData.message;
	    this.sendEmailService.sendEmailForContact(this.user).subscribe(
	      (response) => console.log(response),
	      (error) => console.log(error)
	    );
	    this.contactForm.reset();
	}

}
