import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../stateMan/actions/counter.actions';
import { selectData, TodoState, todoReducer } from '../stateMan/reducer/todo.reducer'
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

  constructor(private store: Store<{count: number, todo: TodoState}>) {
    this.count$ = store.pipe(select('count'));
    // console.log('store', store)
    // console.log('selectData', selectData(store))
    // console.log('selectListLeft', selectListLeft)
    // this.leftList$ = this.store.select('data')
  }
  
  ngOnInit() {
    this.data$ = this.store.select('todo')
    this.listLeft$ = this.store.select('todo', 'data', 'leftList$')

    // show the value of the item in the state
    this.data$.subscribe((x: TodoState) => console.log('this.data$', x.data.listLeft))
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


}
