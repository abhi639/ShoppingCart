import { ADD_TOCART } from "../constants"

const InitialState ={

    cartData:[]
}
export function cartItem(state=[],action){

switch(action.type){
  

    case ADD_TOCART:
        //console.warn("reducer",action)
        return [
           ...state,
         {  cartData:action.data}

        ]
        break

        default: 
        return state

}


}