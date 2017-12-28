import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendEmailService } from './../../../services/sendemail.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
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
    this.sendEmailService.sendEmail(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    //this.sendEmailService.sendEmail(this.user);
    this.demoForm.reset();
	}

}
