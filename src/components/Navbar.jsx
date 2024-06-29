
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar =() =>{
    const {cart} =useSelector((state) => state)
    return (
        <div>
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to="/">
                    <div className="ml-5">
                        <img src="https://ci3.googleusercontent.com/meips/ADKq_Na0ODY2kBi0AEhakhLN5451baToq2iulAgSKEanmBCQ3GtQb4HUL3WfnOvnZnoU_uAChAIjvzspX92SzHLcmXndYsRgisMzYuCwXWmpM6IWI7rqdjTaX4p4Q1540XTM_JwwmBRCPgx6qvJEKS-tYJBvtg6Tjwey04lvkg=s0-d-e1-ft#https://dynamic.brandcrowd.com/preview/logodraft/bd195314-48cb-4a25-bc68-5aab71a06f00/image/large.png" className="h-20 w-30"/>
                    </div>
                </NavLink>
                
                
                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <div className="relative">
                            <FaShoppingCart className="text-2xl" />
                            {
                                cart.length >0 && 
                                <span className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce rounded-full text-white">
                                    {cart.length}
                                </span>
                            }
                        </div>
                    </NavLink>
                     
                </div>
            </nav>
        </div>
    )
}

export default Navbar;