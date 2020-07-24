import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from 'src/model/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  subject: BehaviorSubject<MenuItem> = new BehaviorSubject(null);
  observable: Observable<MenuItem> = this.subject.asObservable();

  constructor() { }

  next(route: MenuItem) {
    this.subject.next(route);
  }
}
