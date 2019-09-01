import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './stateMan/reducer/counter.reducer';
import { todoReducer } from "./stateMan/reducer/todo.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
import { CounterComponent } from './counter/counter.component';

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
    TodoRightComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    StoreModule.forRoot(
      {
        count: counterReducer,
        todo: todoReducer
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
