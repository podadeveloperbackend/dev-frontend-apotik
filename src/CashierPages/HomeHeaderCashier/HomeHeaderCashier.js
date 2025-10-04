import React from 'react'
import { useAuthContext } from '../../context/AuthContext/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import TableSelector from '../ProductPage/Container/TableSelector/TableSelector';
const HomeHeaderCashier = () => {
   const { user, } = useAuthContext();
   const { pathname } = useLocation();
   const pathIndex = pathname.split("/")[1];
   if (
      (user?.role === "admin" && pathIndex === "admin") ||
      (user?.role === "user" && pathIndex === "/")
   ) {
      return null;
   }
  return (
        <header>
            <div className={"header-menu-area bg-primary"}>
               <div className="menu_wrapper">
                  <div className="d-flex justify-content-between mx-2">
                     <div className="fs-2 fw-bold">
                        <Link to="/" className="text-decoration-none text-white">Logo</Link>
                     </div>   
                  </div>
               </div>
            </div>
         </header>
  )
}

export default HomeHeaderCashier
