import { ADD_TOCART } from "../constants"

export const addToCart=(data)=>{

console.warn("action",data)
    return{
      type:ADD_TOCART,
      data:{data}


    }
}