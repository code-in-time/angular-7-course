export interface ITodoItem {
    id : number,
    textVal: string
}


export default class TodoItem implements ITodoItem {
    constructor (public id: number = 0, public textVal: string = '') {}
}
