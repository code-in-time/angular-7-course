import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../stateMan/actions/counter.actions';
import { selectData, ITodoReducer , todoReducer } from '../stateMan/reducer/todo.reducer'
import { actionTodoAdd, actionTodoRemove } from '../stateMan/actions/todo.actions'
import TodoItem from '../../models/TodoItem'
import {IStore} from '../stateMan/shared'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  listLeft: TodoItem[]
  listRight: TodoItem[]

  constructor(private store: Store<IStore>) {
    // Select from the todo store
    store.select('todo').subscribe(data => {
      // Get the data from the reducer
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

  clickTodoAdd(id : number) {
    console.log('clickTodoAdd')
    this.store.dispatch(actionTodoAdd({payload: id}));
  }

  clickTodoRemove(id : number) {
    console.log('clickTodoAdd')
    this.store.dispatch(actionTodoRemove({payload: id}));
  }

}
