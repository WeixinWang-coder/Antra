import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  submitted:Boolean = false;
  form!:FormGroup;
  constructor() {

  }
  ngOnInit(): void {
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        message: new FormControl('', [Validators.required, Validators.minLength(10)])
      })
  }
  onSubmit() {
    console.log(this.form.value);
    this.submitted = true;
  }
}
