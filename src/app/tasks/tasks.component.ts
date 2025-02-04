import { Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent,RouterLink],
})
export class TasksComponent implements OnInit{
 

  private tasksService = inject(TasksService);
  userId = input.required<string>();
 // order = input<'asc' | 'desc'>('asc');
 order = signal<'asc'|'desc'>('asc');
  private  activatedRoute = inject(ActivatedRoute);
  userTasks = computed(() => this.tasksService.allTasks().filter(task => task.userId === this.userId())
  .sort((a,b) => {
    if(this.order() === 'desc'){
      return a.dueDate > a.dueDate ? -1 : 1
    }else{
      return a.dueDate > a.dueDate ? 1: -1
    }
  }));
 private destroyRef = inject(DestroyRef);
  
private activated = inject(ActivatedRoute);
ngOnInit(): void {
 const subs = this.activatedRoute.queryParams.subscribe({
  next : params => this.order.set(params['order']),
 });
 this.destroyRef.onDestroy(() =>subs.unsubscribe());
}

}
