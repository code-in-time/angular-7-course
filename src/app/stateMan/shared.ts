
import {ITodoReducer} from './reducer/todo.reducer'

export interface IStore {
    count: number,
    todo: ITodoReducer
  }