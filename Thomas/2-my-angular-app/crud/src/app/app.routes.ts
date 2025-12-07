import { Routes } from '@angular/router';

export const routes: Routes = [{

path:'',
pathMatch:"full",
loadComponent:()=>{

    return import('./components/counter/counter').then((m)=>m.Counter)

}
},

{
    path:"todos",
    loadComponent:()=>{

        return import ('./todos/todos').then((m)=>m.Todos)
    }





}];
