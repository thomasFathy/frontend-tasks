import { Routes } from '@angular/router';
import { About } from './components/about/about';

export const routes: Routes = [
    


    {
    path:'home',
    loadComponent:()=>{
    return import('./components/home/home').then((m)=>m.Home)

}
    },

    {     
    path:"about",
    loadComponent:()=>{

        return import ('./components/about/about').then((m)=>m.About)
    }

    }
,{     
    path:"skills",
    loadComponent:()=>{

        return import ('./components/skills/skills').then((m)=>m.Skills)
    }

    },
    {

    path:"projects",
    loadComponent:()=>{

        return import ('./components/projects/projects').then((m)=>m.Projects)
    }

    


},
{

    path:"contact",
    loadComponent:()=>{

        return import ('./components/contact/contact').then((m)=>m.Contact)
    }

    


}
]
