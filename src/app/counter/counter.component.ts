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

  constructor(private store: Store<{count: number, todo: TodoState}>) {

    // console.log('store', store)
    // console.log('selectData', selectData(store))
    // console.log('selectListLeft', selectListLeft)
    // this.leftList$ = this.store.select('data')
  }
  
  ngOnInit() {
    this.count$ = this.store.pipe(select('count'));
    this.listLeft$ = this.store.pipe(select('todo', 'data', 'leftList$'));
    // this.data$ = this.store.select('todo')
    // this.listLeft$ = this.store.select('todo', 'data', 'leftList$')

    // show the value of the item in the state
    // this.data$.subscribe((x: TodoState) => console.log('this.data$', x.data.listLeft))

    console.log('listLeft', this.listLeft$)
    console.log('count', this.count$)
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


  clickTodoAdd(todoID : number) {
    console.log('clickTodoAdd')
    this.store.dispatch(actionTodoAdd({payload: new TodoItem(1, 'ggggg')}));
  }

  clickTodoRemove(todoID : number) {
    console.log('clickTodoAdd')
    this.store.dispatch(actionTodoRemove({payload: new TodoItem(1, 'ggggg')}));
  }

}
