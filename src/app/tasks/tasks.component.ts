import { Component, OnInit, computed, inject, input } from '@angular/core';

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
export class TasksComponent {

  private tasksService = inject(TasksService);
  userId = input.required<string>();
  order = input<'asc' | 'desc'>('asc');
 
  private  activatedRoute = inject(ActivatedRoute);
  userTasks = computed(() => this.tasksService.allTasks().filter(task => task.userId === this.userId()));
  //private d
 
  


}
