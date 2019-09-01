import { createAction, Action } from '@ngrx/store';
import TodoItem from '../../../models/TodoItem'


// actions
// export const todoSelect = createAction('[todo] todoSelect');
// export const todoUndo = createAction('[todo] todoUndo');
// export const todoReset = createAction('[todo] todoReset');

export const TODO_ADD = '[todo] todoAdd';
// export const todoUndo = createAction('[todo] todoUndo');
// export const todoReset = createAction('[todo] todoReset');



export class TodoAdd implements Action {
    readonly type = TODO_ADD
    payload: TodoItem
}




