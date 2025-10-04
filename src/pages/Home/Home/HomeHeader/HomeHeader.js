import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import { useAuthContext } from '../../../../context/AuthContext/AuthContext';
import HomeHeaderCashier from '../../../../CashierPages/HomeHeaderCashier/HomeHeaderCashier';
import ProfileDropdown from '../../../../components/Shared/ProfileDropdown/ProfileDropdown';
const HomeHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   const { user, isLogin } = useAuthContext();
   const { pathname } = useLocation();
   const pathIndex = pathname.split("/")[1];

   // ⬅️ Fix logic
   if (
      (user?.role === "owner" && pathIndex === "owner")
   ) {
      return null;
   }
   if (
      (user?.role === "admin" && pathIndex === "admin")
   ) {
      return null;
   }

   if (
      (user?.role === "cashier" && pathIndex === "cashier")
   ) {
      return (
         <HomeHeaderCashier />
      )
   }
   return (
      <>
         <header>
            <div className="top-bar d-none d-md-block bg-purple">
               <div className="">
                  <div className="header-info">
                     <span><i className="fas fa-phone"></i>+6285371936189</span>
                     <span><i className="fas fa-envelope"></i>podadeveloperteam@gmail.com</span>
                  </div>
               </div>
            </div>
            <div className="d-none d-md-block">
               <div className="header-info d-flex justify-content-center align-items-center">
                  <p className="text-black opacity-50 mb-0">
                     The text or image used is dummy data!
                  </p>
               </div>
            </div>
            <div className={stickyMenu ? "sticky_menu" : "header-menu-area"}>
               <div className="menu_wrapper">
                  <div className="d-flex justify-content-between align-items-center mx-2">
                     <div className="fs-2 fw-bold">
                        <Link to="/" className="text-decoration-none text-dark">Logo</Link>
                     </div>
                     <div>
                        <div className="header__menu">
                           <nav id="mobile-menu">
                              <ul className="d-flex align-items-center list-unstyled mb-0">
                                 <li className='me-3'>
                                    <Link to="/">Home</Link>
                                 </li>
                                 <li className='me-3'>
                                    <Link to="/shop">Shop</Link>
                                 </li>
                                 <li className="position-relative me-3">
                                    Page
                                    <ul className="submenu">
                                       <li><Link to="/about">About Us</Link></li>
                                       <li><Link to="/">Consultation Service</Link></li>
                                       <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                 </li>
                                 <div className='ms-4'>
                                    <li>
                                       <Link to="/shopping-cart">
                                          <i className="fal fa-shopping-cart fs-5"></i>
                                       </Link>
                                    </li>
                                    {!isLogin && (
                                       <li>
                                          <Link to="/login" className="fw-semibold text-uppercase">Login</Link>
                                       </li>
                                    )}
                                   {isLogin && (
                                       <li className="ms-4">
                                          <ProfileDropdown />
                                       </li>
                                    )}
                                 </div>
                              </ul>
                           </nav>
                        </div>
                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeHeader;
