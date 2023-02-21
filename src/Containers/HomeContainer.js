import React from 'react'
import Home from '../Components/Home'
import { connect} from 'react-redux';
import { addToCart} from '../Services/Actions/Actions';


const usemapStateProps=state=>({

data:state.cartItem

})
const mapDispach=dispatch=>({

addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(usemapStateProps,mapDispach)(Home);
//export default Home;