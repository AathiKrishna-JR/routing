import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-tasks/no-task.component";
import { UserTasksComponent } from "./users /users-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-tasks/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {routes as userRoutes} from "./users /users.routes"
export const routes : Routes = [
    {
        path : '',
       component: NoTaskComponent,
        // redirectTo : '/users/u1',
        // pathMatch : 'full'
    }
    ,{
        
            path : 'users/:userId',
            component :UserTasksComponent,
            children: userRoutes,
        
    },
    {
        path : '**',
        component: NotFoundComponent
    }
]