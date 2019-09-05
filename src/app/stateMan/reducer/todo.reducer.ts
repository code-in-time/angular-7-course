import { createReducer, on, Action, createSelector } from '@ngrx/store';
import * as todoActions from '../actions/todo.actions';
import TodoItem from '../../../models/TodoItem'
// https://ngrx.io/guide/store/reducers
export interface TodoState {
  data: {
    listLeft: TodoItem[],
    listRight: TodoItem[]
  }
}

export const initialState: TodoState = {
    data: {
        listLeft: [new TodoItem(0, 'txt1'), new TodoItem(1, 'txt2'),new TodoItem(2, 'txt3'), new TodoItem(3, 'txt4')],
        listRight: []
    }};
 
export const selectData = (state: TodoState) => state.data

// export const selectListLeft = createSelector(
//   selectData,
//   (state: {listLeft: TodoItem[]}) => state.listLeft
// )
 
export function todoReducer(state = initialState, action: any) {
  // return _todoReducer(state, action);
  switch (action.type) {
    case todoActions.TODO_ADD:
        return {
          ...state,
          // data: this.data.push(new TodoItem(0, 'txt1'))
          data: {
            // listLeft: [...state.data.listLeft, new TodoItem(0, 'txt1')]
            listLeft: state.data.listLeft.filter(item => item.id != action.payload.id),
            listRight: [...state.data.listRight, action.payload]
          }
        }

      case todoActions.TODO_REMOVE:
          return {
            ...state,
            data: {
              listRight: state.data.listRight.filter(item => item.id != action.payload.id),
              listLeft: [...state.data.listLeft, action.payload]
            }
          }
  
    default:
      return state
      break;
  }

}