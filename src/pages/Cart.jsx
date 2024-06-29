import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount] =useState(0);

  useEffect( ()=>{
    setTotalAmount(cart.reduce( (acc,curr)=>acc + curr.price,0))
  },[cart])

  return (
    <div>
      {
        cart.length>0 ?
        (
          <div className="flex justify-center">
            <div className="flex flex-col">
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="ml-16 flex flex-col justify-between mt-10">
              <div flex flex-col>
                <div className="font-semibold text-xl text-green-700 uppercase">Your Cart</div>
                <div className="font-bold text-4xl text-green-700 uppercase">Summary</div>
                <p>
                  <span className='text-gray-800 font-semibold text-lg text-left mt-1'>Total Items :{cart.length}</span>
                </p>
              </div>
              <div flex flex-col>
                <div className='text-gray-800 font-semibold text-lg text-left mt-1'>Total Amount:{totalAmount}</div>
                <button className="bg-green-800 text-white w-full p-3 mt-4 rounded-lg font-bold">
                  Checkout Now
                </button>
              </div>
            </div>

          </div>
        ):
        (
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-gray-900 font-bold text-[20px]">Your cart is empty!</h1>
            <Link to="/">
              <button className="text-white bg-green-600 font-bold rounded-md p-2 px-6 uppercase mt-5
              hover:bg-green-800">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
}

export default Cart
