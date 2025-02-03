import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-tasks/no-task.component";

export const routes : Routes = [
    {
        path : '',
        component: NoTaskComponent,
    }
    ,{
        
            path : 'tasks' ,
            component :TasksComponent,
        
    }
]