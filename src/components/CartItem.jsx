
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast'

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
    <div>
      <div className='flex p-8 border-b-2 mt-1'>
        <div className='mr-6 flex justify-center w-[180px] h-[180px]'>
          <img src={item.image} className='h-[180px]'/>
        </div>
        <div className='flex flex-col w-[400px] h-[180px]'>
          <h1 className='text-gray-700 font-semibold text-lg text-left mt-2'>{item.title}</h1>
          <h1 className='w-80 text-blue-950 font-normal text-[15px] text-left mt-2'>{item.description.split(" ").slice(0,15).join(" ") +"..."}</h1>
          <div className='flex justify-between mt-4'>
            <p className='text-green-600 font-semibold'>${item.price}</p>
            <div onClick={removeFromCart} className='bg-red-100 p-2 rounded-full mr-6'>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
