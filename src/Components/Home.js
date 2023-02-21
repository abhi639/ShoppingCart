import React from 'react'
import { Form } from 'semantic-ui-react'
import image from './Images/Shopping-Cart.png'
function Home() {
  return (
    <div>
      <div className='img-cart'>
  { <img src='https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964__340.png'/> }

        
      </div>
      <div>


      </div>
        <h1>Shopping Cart</h1>
        <div className='cart-wraper'>
          <div className='img-wrapper item'> 
                 <img src='https://images.hindustantimes.com/tech/img/2022/08/20/960x540/Untitled_design_-_2022-08-20T143510.743_1660986921934_1660986948247_1660986948247.png'/>
          </div>
         

         <div className='text-Wrapper item'>
       <span> I-phone</span><br></br>
       
      
       <span>
        price:$1000
       </span>

         </div>
         <div className='btn-wrapper item'>

            <button className='btn btn-primary'>Add to Cart</button>

         </div>
        </div>
            



    </div>
  )
}

export default Home