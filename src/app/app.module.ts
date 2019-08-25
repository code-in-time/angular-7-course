import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AreaComponent } from './area/area.component';
import { PageTodoComponent } from './page-todo/page-todo.component';
import { TodoLeftComponent } from './page-todo/todo-left/todo-left.component';
import { TodoRightComponent } from './page-todo/todo-right/todo-right.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AreaComponent,
    PageTodoComponent,
    TodoLeftComponent,
    TodoRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
