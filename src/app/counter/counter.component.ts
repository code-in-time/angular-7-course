import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../stateMan/actions/counter.actions';
import { selectData, TodoState, todoReducer } from '../stateMan/reducer/todo.reducer'
import { actionTodoAdd, actionTodoRemove } from '../stateMan/actions/todo.actions'
import TodoItem from '../../models/TodoItem'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  data$: Observable<TodoState>;
  listLeft$ : Observable<TodoItem[]>;
  listLeft: TodoItem[]
  listRight: TodoItem[]

  constructor(private store: Store<{count: number, todo: TodoState}>) {
    store.select('todo').subscribe(data => {
      // get the data from the reducer
      this.listLeft =  data.data.listLeft
      this.listRight = data.data.listRight
    })
  }
  
  ngOnInit() {
    this.count$ = this.store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }


  clickTodoAdd(item : TodoItem) {
    console.log('clickTodoAdd')
    this.store.dispatch(actionTodoAdd({payload: item}));
  }

  clickTodoRemove(item : TodoItem) {
    console.log('clickTodoAdd')
    this.store.dispatch(actionTodoRemove({payload: item}));
  }

}
