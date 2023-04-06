import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormMember } from '../interface'; 
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  constructor(private service : ServiceService){}
  arr?: FormMember;
  ngOnInit(): void {
    this.service.share.subscribe(res => {
      this.arr = res;
    })
  }

}
