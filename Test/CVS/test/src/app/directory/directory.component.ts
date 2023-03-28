import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/models';
import { ServiceNameService } from 'src/app/service';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  public user: users[] = [];
  constructor(private service: ServiceNameService){}

  ngOnInit(): void {
   this.service.getAllUsers().subscribe(val => {
    this.user = val['data'], console.log(this.user);
   })
  }
  
}
