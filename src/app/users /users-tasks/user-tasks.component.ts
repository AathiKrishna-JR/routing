import { Component, DestroyRef, Inject, Input, OnInit, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { DUMMY_USERS } from '../../../dummy-users';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports : [RouterOutlet,RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  
  userName = input.required<string>();
  message = input<string>('');
  //userId = input.required<string>();
//   private destroyRef = inject(DestroyRef);
//   private userService = inject(UsersService);
//  private activatedRoute = inject(ActivatedRoute)
 // userName = computed(() => this.userService.users.find( u => u.id === this.userId())?.name);

}
export const resolveUserName : ResolveFn<string> = (activatedRoute : ActivatedRouteSnapshot, routerState :RouterStateSnapshot) => {
  const userService= inject(UsersService);
  const userName = userService.users.find( u => u.id === activatedRoute.paramMap.get('userId'))?.name || ''
  return userName;
} ;