import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { FormMember } from './interface';

@Injectable()
export class ServiceService {
  share!: Subject<FormMember>;
  constructor() {
    this.share = new Subject<FormMember>();
  }
}
