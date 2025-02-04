import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-tasks/no-task.component";
import { UserTasksComponent, resolveTitle, resolveUserName } from "./users /users-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-tasks/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {routes as userRoutes} from "./users /users.routes"
import { inject } from "@angular/core";

const dummyCanMatch : CanMatchFn = (route,segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess < 0.5){
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

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
            canMatch: [dummyCanMatch],
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