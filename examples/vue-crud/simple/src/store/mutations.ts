import { MutationTree } from 'vuex'
import { State,ToDoItem } from './state'

/**
 * Define Mutation Type as operation list
 */
export enum MutationType{
    CreateItem = 'CREATE_ITEM',
    SetItems ='SET_ITEMS',
    CompleteItem = 'COMPLETE_ITEM',
    SetLoading = 'SET_LOADING'
}

/**
 * Define Mutation Interface
 */
export type Mutations ={
    [MutationType.CreateItem](state:State,item:ToDoItem):void
    [MutationType.SetItems](state:State,items:ToDoItem[]):void
    [MutationType.CompleteItem](state:State,newItem:Partial<ToDoItem>&{id:number}):void
    [MutationType.SetLoading](state:State,value:boolean):void
}

/**
 * Implete the mutaion interface
 */
export const mutations:MutationTree<State> & Mutations ={
    [MutationType.CreateItem](state:State,item:ToDoItem){
        state.items.unshift(item)
    },
    [MutationType.SetItems](state:State,items:ToDoItem[]){
        state.items=items
    },
    /**
     * understand what is Partial
     * @param state 
     * @param newItem 
     */
    [MutationType.CompleteItem](state:State,newItem:Partial<ToDoItem>&{id:number}){
        const item = state.items.findIndex(
            s=>s.id==newItem.id
        )
        if(item==-1) return
        //todo:understand it
        state.items[item]= {
            ...state.items[item],
            ...newItem
        }
    },
    [MutationType.SetLoading](state:State,value:boolean){
        state.loading=value
    }
}