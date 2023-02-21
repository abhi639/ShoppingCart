import { ADD_TOCART } from "../constants"

const InitialState ={

    cartData:[]
}
export function cartItem(state=InitialState,action){

switch(action.type){
  

    case ADD_TOCART:
        return {
           ...state,
           cartData:action.data

        }
        break

        default: 
        return state

}


}