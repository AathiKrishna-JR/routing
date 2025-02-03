import { Component, DestroyRef, Inject, Input, OnInit, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../../../dummy-users';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports : [RouterOutlet,RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  


  //userId = input.required<string>();
  userName = ' ';
  private destroyRef = inject(DestroyRef);
  private userService = inject(UsersService);
 private activatedRoute = inject(ActivatedRoute)
 // userName = computed(() => this.userService.users.find( u => u.id === this.userId())?.name);

    
  ngOnInit(){
      console.log(this.activatedRoute);
      const subs = this.activatedRoute.paramMap.subscribe({
        next : (paraMap) =>{
        this.userName = this.userService.users.find( u => u.id === paraMap.get('userId'))?.name || ''
      },
    });
    this.destroyRef.onDestroy(() => subs.unsubscribe()) ;

  }
}

// import { Component, OnInit, inject, input } from '@angular/core';
// import { UsersService } from '../users.service';
// import {
// ActivatedRoute,
// ActivatedRouteSnapshot,
// RouterLink,
// ResolveFn,
// RouterOutlet,
// RouterStateSnapshot,
// } from '@angular/router';

// @Component({
// selector: 'app-user-tasks',
// standalone: true,
// imports: [RouterOutlet, RouterLink],
// templateUrl: './user-tasks.component.html',
// styleUrl: './user-tasks.component.css',
// })
// export class UserTasksComponent implements OnInit {
// userName = input.required<string>();
// message = input.required<string>();
// private activatedRoute = inject(ActivatedRoute);

// ngOnInit(): void {
// this.activatedRoute.data.subscribe({
// next: (data) => {
// console.log(data);
// },
// });
// }
// }
// export const resolveUserName: ResolveFn<string> = (
// ActivatedRoute: ActivatedRouteSnapshot,
// RouterState: RouterStateSnapshot
// ) => {
// const usersService = inject(UsersService);
// const userName =
// usersService.users.find(
// (u) => u.id === ActivatedRoute.paramMap.get('userId')
// )?.name || '';
// return userName;
// };