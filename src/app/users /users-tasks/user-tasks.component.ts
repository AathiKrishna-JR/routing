import { Component, DestroyRef, Inject, Input, OnInit, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { DUMMY_USERS } from '../../../dummy-users';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  


  //userId = input.required<string>();
  userName = '';
  private destroyRef = inject(DestroyRef);
  private userService = Inject(UsersService);
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