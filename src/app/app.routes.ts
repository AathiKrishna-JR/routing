import {  Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-tasks/no-task.component";
import { UserTasksComponent, resolveTitle, resolveUserName } from "./users /users-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";

// const dummyCanMatch : CanMatchFn = (route,segments) => {
//     const router = inject(Router);
//     const shouldGetAccess = Math.random();
//     if(shouldGetAccess < 0.5){
//         return true;
//     }
//     return new RedirectCommand(router.parseUrl('/unauthorized'));
// }

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
    
            loadChildren: () => import('./users /users.routes').then(mod => mod.routes),
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