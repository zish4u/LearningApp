import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: 'page/:slug', component: PageNotFoundComponent },
  { path: 'contact', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
