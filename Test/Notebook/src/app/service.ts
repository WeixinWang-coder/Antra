import { noteType } from "./type.model";

export class Service{
    private noteList: noteType[] = [{'title':"Antra", "content":"When can I get a Job!!!"}];

    title:string ='';
    content:string = '';

    addNote(note: noteType) {
        this.noteList.push(note);
    }
    getNoteList() {
        return this.noteList;
    }
    deleteNote(index:number) {
        this.noteList.splice(index, 1);
    }
    getNoteItem(index:number) {
        return this.noteList[index];
    }

}