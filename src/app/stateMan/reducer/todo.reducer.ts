import { createReducer, on, Action, createSelector } from '@ngrx/store';
import * as todoActions from '../actions/todo.actions';
import TodoItem from '../../../models/TodoItem'
// https://ngrx.io/guide/store/reducers
export interface ITodoReducer {
  data: {
    listLeft: TodoItem[],
    listRight: TodoItem[]
  }
}

let tempItemSave: TodoItem

export const initialState: ITodoReducer = {
    data: {
        listLeft: [new TodoItem(0, 'txt1'), new TodoItem(1, 'txt2'),new TodoItem(2, 'txt3'), new TodoItem(3, 'txt4')],
        listRight: []
    }};
 
export const selectData = (state: ITodoReducer) => state.data
 
export function todoReducer(state: ITodoReducer = initialState, action: any) {
  switch (action.type) {
    case todoActions.TODO_ADD:

        // Get the selected todo item
        tempItemSave = state.data.listLeft.find(item => item.id === action.payload)

        return {
          ...state,
          data: {
            listLeft: state.data.listLeft.filter(item => item.id != action.payload),
            listRight: [...state.data.listRight, tempItemSave]
          }
        }

      case todoActions.TODO_REMOVE:

        // Get the selected todo item
        tempItemSave = state.data.listRight.find(item => item.id === action.payload)
        return {
          ...state,
          data: {
            listRight: state.data.listRight.filter(item => item.id != action.payload),
            listLeft: [...state.data.listLeft, tempItemSave]
          }
        }
  
    default:
      return state
      break;
  }

}