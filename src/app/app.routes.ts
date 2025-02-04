import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-tasks/no-task.component";
import { UserTasksComponent, resolveTitle, resolveUserName } from "./users /users-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-tasks/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {routes as userRoutes} from "./users /users.routes"
export const routes : Routes = [
    {
        path : '',
       component: NoTaskComponent,
        // redirectTo : '/users/u1',
        // pathMatch : 'full'
        title : 'Home'
    }
    ,{
        
            path : 'users/:userId',
            component :UserTasksComponent,
            children: userRoutes,
            data : {
                message : 'Hello!'
            },
            resolve : {
                userName: resolveUserName,
            },
            title : resolveTitle
    },
    {
        path : '**',
        component: NotFoundComponent
    }
]