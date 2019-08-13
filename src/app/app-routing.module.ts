import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component'


const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'contact' , component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// <li><a routerLink="/">Home</a></li>
// <li><a routerLink="/about">About</a></li>
// <li><a routerLink="/contact">Contact us</a></li>