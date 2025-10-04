import React from "react";
import { useAuthContext } from "../../../../context/AuthContext/AuthContext";
import { useLocation } from "react-router-dom";
import NavigationBottomCashier from "../../../../CashierPages/NavigationBottomCashier/NavigationBottomCashier";
const HomeNavigationBottom = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const pathIndex = pathname.split("/")[1];

    if (
      (user?.role === "admin" && pathIndex === "admin")
   ) {
      return null;
   }

   if (
      (user?.role === "cashier" && pathIndex === "cashier")
   ) {
      return <NavigationBottomCashier />;
   }
  return (
    <>
    </>
  );
};

export default HomeNavigationBottom;
