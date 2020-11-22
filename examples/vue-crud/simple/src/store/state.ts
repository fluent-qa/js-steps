export type ToDoItem ={
    id: number,
    details: string,
    completed: boolean
}

export type State = {
    loading:boolean,
    items:ToDoItem[]
}
/**
 * initial state of to do store item
 */
export const state:State = {
    loading:false,
    items:[]
}