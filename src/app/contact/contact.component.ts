import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = true;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

onSubmit() {

  console.log('this.messageForm', this.messageForm.value);
  this.submitted = true;

  if (this.messageForm.invalid) {
    return;
  }
  // Api call.
  this.success = true;
}

  ngOnInit() {
    // Set values on load
    this.messageForm.patchValue({
      name: 'hello',
      message: '87878787'
    })
  }

}
