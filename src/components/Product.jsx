import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const Product = ({post}) => {
  const {cart} =useSelector((state)=>state);
  const dispatch =useDispatch();

  const addToCart=()=>{
    dispatch(add(post))
    toast.success("Item added to Cart")
  }
  const removeFromCart =()=>{
    dispatch(remove(post.id))
    toast.error("Item removed from Cart")
  }
  return (
    <div className='flex flex-col justify-center items-center hover:scale-110 transition duration-300 ease-in hover:shadow-2xl gap-3 p-4 mt-10 ml-5 rounded-xl'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") +"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='w-full h-full'/>
      </div>
      <div className='flex justify-center gap-12 items-center w-full mt-5'>
        <div>
          <p className='text-green-600 font-semibold'>${post.price}</p>
        </div>
        <div>
        {
          cart.some((p) => p.id==post.id)?
          (
            <button 
            onClick={removeFromCart}
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700
            hover:text-white  transition duration-300 ease-in'
            >
              Remove Item
            </button>
          ):
          (
            <button 
            onClick={addToCart}
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700
            hover:text-white  transition duration-300 ease-in'>
              Add to Cart
            </button>
          )
        }
        </div>
      </div>
      
    </div>
  )
}

export default Product
