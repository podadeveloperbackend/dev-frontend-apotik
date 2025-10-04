import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { useAuthContext } from '../../../context/AuthContext/AuthContext';
const Sidebar = ({ show, handleClose }) => {
   const { user, isLogin } = useAuthContext();

   const Home = <NavLink to="/">Home</NavLink>
   const Shop = <NavLink to="/shop">Shop</NavLink>
   const Pages = <a href="#">Pages</a>
   const Login = <NavLink to="/login">Login</NavLink>
   const Profile = <NavLink to="/profile">Profile</NavLink>

   return (
      <>
         <div>
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>

                  <Collapsible trigger={Home} triggerTagName="div">
                  </Collapsible>

                  <Collapsible trigger={Shop} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-black ml-2">
                        <li><NavLink to="/shopping-cart">Keranjang</NavLink></li>
                     </ul>
                  </Collapsible>

                  <Collapsible trigger={Pages} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-black ml-2">
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                     </ul>
                  </Collapsible>
                  {!isLogin && (
                  <Collapsible trigger={Login} triggerTagName="div">
                   </Collapsible>
                  )}
                  {
                     isLogin && (
                        <Collapsible trigger={Profile} triggerTagName="div"
                           triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                           <ul className="sidebar_sub_menu text-black ml-2">
                           {user?.role !== 'user' && (
                              <li><NavLink to={user?.role}>Dashboard</NavLink></li>
                           )}
                           <li><NavLink to="/order">Pesanan</NavLink></li>
                           <li><NavLink to="/contact">Logout</NavLink></li>
                           </ul>
                        </Collapsible>
                     )
                     }
               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;