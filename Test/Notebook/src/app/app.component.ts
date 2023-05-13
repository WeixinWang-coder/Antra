import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { noteType } from './type.model';
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit   {
  constructor(private ser: Service){}
  title = '';
  content = '';
  noteList!:noteType[];
  currentIndex:number = -1;

  ngOnInit(): void {
    this.noteList = this.ser.getNoteList();
  }
  createNewNote() {
    this.title ='';
    this.content ='';
  }
  onSubmit(title:string, content:string) {
    this.ser.addNote({title:title,content:content});
    this.ser.getNoteList();
    console.log(this.ser.getNoteList());
  }
  deleteButton(unit:number){
    this.ser.deleteNote(unit);
  }
  selectedNote(index:number) {
    this.title = this.ser.getNoteItem(index).title;
    this.content = this.ser.getNoteItem(index).content;
    this.currentIndex = index;
  }
  onUpdated(title:string, content:string) {
    if(title === '' && content === '') {
      return;
    }
    if(this.currentIndex !== -1) {
      this.noteList[this.currentIndex].title = this.title;
      this.noteList[this.currentIndex].content=this.content;
      
    }
  }
}
