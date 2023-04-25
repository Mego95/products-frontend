import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserAPIUserOne } from 'shared';
import { BehaviorSubject } from 'rxjs';
import { UiService } from 'ui';
import { Router } from '@angular/router';

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable();

  private loggedInUserNameSubject= new BehaviorSubject<string>('');
  loggedInUserName$ = this.loggedInUserNameSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  constructor(private http: HttpClient, private alertService: UiService, private router: Router) { }

  login(username:string, password:string) {
    this.setIsLoading(true);
    this.http
    .get<UserAPIUserOne>(`${USER_API}/findone/${username}`)
    .subscribe((res) => {
      if (res.data && res.data.password === password) {
        this.loggedInSubject.next(res.data.password === password);
        this.loggedInUserNameSubject.next(`${res.data.name} ${res.data.surname}`);
        this.alertService.newAlert({
          type: 'success',
          heading: `Welcome ${this.loggedInUserNameSubject.value}`,
          text: 'Nice to see you again!',
        })
        this.router.navigate(['/user'])
      } else {
        this.alertService.newAlert({
          type:'danger', 
          heading:'Authentication Error', 
          text: 'Wrong username or password'
        });
      }
      this.setIsLoading(false);
    });
  }

  logout() {
    this.loggedInSubject.next(false);
    this.loggedInUserNameSubject.next('');
    this.router.navigate(['/'])
  }

  setIsLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }
}
