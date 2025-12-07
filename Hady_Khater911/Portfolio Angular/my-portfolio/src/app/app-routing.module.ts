import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact} from './components/contact/contact';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },  
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '/about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
