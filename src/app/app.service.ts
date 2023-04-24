import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserAPIUserOne } from 'shared';
import { BehaviorSubject } from 'rxjs';

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable();

  private loggedInUserNameSubject= new BehaviorSubject<string>('');
  loggedInUserName$ = this.loggedInUserNameSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(username:string, password:string) {
    this.http
    .get<UserAPIUserOne>(`${USER_API}/findone/${username}`)
    .subscribe((res) => {
      if (res.data) {
        this.loggedInSubject.next(res.data.password === password);
        this.loggedInUserNameSubject.next(`${res.data.name} ${res.data.surname}`);
      }
    });
  }

  logout() {
    this.loggedInSubject.next(false);
    this.loggedInUserNameSubject.next('');
  }
}
