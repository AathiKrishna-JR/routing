import { Routes } from '@angular/router';

import {resolveUserTasks } from '../tasks/tasks.component';
import { NewTaskComponent, canLeaveEditPage } from '../tasks/new-tasks/new-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
   
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    loadComponent : () =>import('../tasks/tasks.component').then(mod => mod.TasksComponent),
    runGuardsAndResolvers : 'always',
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate : [canLeaveEditPage]
  },

];