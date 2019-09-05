import { createAction, Action, props,  } from '@ngrx/store';
import TodoItem from '../../../models/TodoItem'


// actions
// export const todoSelect = createAction('[todo] todoSelect');
// export const todoUndo = createAction('[todo] todoUndo');
// export const todoReset = createAction('[todo] todoReset');

export const TODO_ADD = 'TODO_ADD';
export const TODO_REMOVE = 'TODO_REMOVE';
// export const todoUndo = createAction('[todo] todoUndo');
// export const todoReset = createAction('[todo] todoReset');


// export const actionTodoAdd = (todoID: number): Action => (
//     {
//         action: TODO_ADD,
//         payload: todoID
//     }
// )




// export class TodoAdd implements Action {

//     constructor(public payload: number) { }

//     readonly type = TODO_ADD
// }


export const actionTodoAdd = createAction(
    TODO_ADD,
    props<{payload: TodoItem}>()
)

export const actionTodoRemove = createAction(
    TODO_REMOVE,
    props<{payload: TodoItem}>()
)





