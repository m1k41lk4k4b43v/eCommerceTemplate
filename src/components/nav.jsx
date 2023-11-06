import React from "react";
import { Link } from 'react-router-dom';

  
const Nav = () => {      
    return(
        <div className="fixed w-full z-10 flex justify-end items-center px-12 py-2 bg-black">
            <div className="flex space-x-12">
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center space-x-2">
                        <Link to='/shop' className="flex">
                            <span className="text-white text-2xl flex"><ion-icon name="chevron-back-outline"></ion-icon></span>
                            <a className="text-white" href="/shop">Shop</a>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link to='/card'><span className="text-white text-4xl"><ion-icon name="basket"></ion-icon></span></Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;


