import { Routes } from '@angular/router';

import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component';
import { NewTaskComponent, canLeaveEditPage } from '../tasks/new-tasks/new-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
   
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    runGuardsAndResolvers : 'paramsOrQueryParamsChange',
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