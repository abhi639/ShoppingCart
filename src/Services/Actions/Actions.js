import { ADD_TOCART } from "../constants"

const addToCart=(data)=>{


    return{
      type:ADD_TOCART,
      data:{data}


    }
}