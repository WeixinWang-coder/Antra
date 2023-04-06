import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  form!: FormGroup;
  constructor(private service : ServiceService){}
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("",),
      email: new FormControl(""),
      number: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
  
    })
  }
  submit() {
    this.service.share.next(this.form.value);
    this.form.reset();
  }
}
