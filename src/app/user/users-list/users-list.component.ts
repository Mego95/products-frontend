import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User, UserAPIList } from 'shared';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash-es';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService, private appService: AppService) {}

  loading = false;
  userList: User[] = [];
  subscription: Subscription | undefined;

  usernameSortType: 'asc' | 'desc' = 'asc';
  firstnameSortType: 'asc' | 'desc' = 'asc';
  surnameSortyType: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    console.log('Starting "findall" api call');
    // this.loading = true;
    this.appService.setIsLoading(true);
    this.subscription = this.userService.findAll().subscribe({
      next: (apiData: UserAPIList) => {
        const {status, data} = apiData;
        this.userList = data;
        console.log(status, ' ', data);
      },
      error: (error) => {
        console.log(error);
        // this.loading = false;
        this.appService.setIsLoading(false);
      },
      complete: () => {
        console.log('finished api call');
        // this.loading = false;
        this.appService.setIsLoading(false);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe;
  }

  toggleSort(key: string) {
    switch (key) {
      case 'username':
        this.usernameSortType = this.usernameSortType === 'asc' ? 'desc' : 'asc';
        this.userList = orderBy(this.userList, [key], [this.usernameSortType]);
        break;
      case 'name':
        this.firstnameSortType = this.firstnameSortType === 'asc' ? 'desc' : 'asc';
        this.userList = orderBy(this.userList, [key], [this.firstnameSortType]);
        break
      case 'surname':
        this.surnameSortyType = this.surnameSortyType === 'asc' ? 'desc' : 'asc';
        this.userList = orderBy(this.userList, [key], [this.surnameSortyType]);
        break
      default:
        break;
    }
  }
}
