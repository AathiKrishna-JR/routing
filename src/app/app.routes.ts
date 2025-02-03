import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-tasks/no-task.component";
import { UserTasksComponent } from "./users /users-tasks/user-tasks.component";

export const routes : Routes = [
    {
        path : '',
        component: NoTaskComponent,
    }
    ,{
        
            path : 'users/:userId',
            component :UserTasksComponent,
        
    }
]