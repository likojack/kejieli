import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as brands from '@fortawesome/free-brands-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('slide', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-15%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 1, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  public faPaperPlane = regular.faPaperPlane;
  public faLaughBeam = regular.faLaughBeam;
  public faLinkedin = brands.faLinkedin;
  public faEnvelope = solid.faEnvelope;
  public faMapMarkerAlt = solid.faMapMarkerAlt;

  contactForm: FormGroup;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  subject = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      subject: this.subject,
      message: this.message,
    });
  }

  ngOnInit(): void {
  }

  getErrorMessage(field: string): string {
    switch (field) {
      case 'firstName':
      case 'lastName':
      case 'subject':
      case 'message':
        return 'Required';
        break;
      case 'email':
        return this.email.hasError('required') ? 'Required' : this.email.hasError('email') ? 'Please enter a valid email' : '';
        break;
      default:
        break;
    }
  }

  sendMessage(): void {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach((field) => {
        const control = this.contactForm.get(field);
        if (control instanceof FormControl) {
          if (control.invalid) {
            control.markAsTouched({ onlySelf: true });
          }
        }
      });
      return;
    }
    const body = `From ` + this.firstName.value + ` ` + this.lastName.value + `
    Contact Email: ` + this.email.value + `
    Message: ` + this.message.value + `
    `;
    window.open('mailto:kejie.li@outlook.com?subject=' + this.subject.value + '&body=' + body);
  }
  goToLink(url: string): void {
    window.open(url, '_blank');
  }
}
