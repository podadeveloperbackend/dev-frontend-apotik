import React, { useEffect } from "react";
import { getOrder } from "../../services/Order/api";
import { getUser} from "../../services/User/api"
import { getProdukObat } from "../../services/ProdukObat/api";
import { getSupplier } from "../../services/Supplier/api";
import { getCategory } from "../../services/Category/api";
const DashboardContext = React.createContext();

export const useDashboardContext = () => {
  return React.useContext(DashboardContext);
};

const DashboardContextProvider = ({ children }) => {
  const [orders, setOrders] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [ordersBar, setOrdersBar] = React.useState([]);
  const [orderRecents, setOrderRecents] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [suppliers, setSuppliers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

 const handleGetOrders = async () => { 
  setIsLoading(true);
  try {
    const response = await getOrder();
    const orders = response.orders;
    setOrders(orders);
    const groupedOrders = {};

    orders.forEach(order => {
      const date = new Date(order.created_at).toISOString().split('T')[0];

      if (!groupedOrders[date]) {
        groupedOrders[date] = {
          date,
          incomePending: 0,    // status 0
          incomeCompleted: 0,  // status 3
          orders: [],
        };
      }

      const subTotal = Number(order.sub_total);
      if (order.status === 0) {
        groupedOrders[date].incomePending += subTotal;
      } else if (order.status === 3) {
        groupedOrders[date].incomeCompleted += subTotal;
      }

      groupedOrders[date].orders.push(order);
    });

    const groupedArray = Object.values(groupedOrders);

    setOrdersBar(groupedArray);
  } catch (error) {
    setOrders([]);
    setOrdersBar([]);
    ;
  } finally {
    setIsLoading(false);
  }
};

  const handleGetRecentOrders = async () => {
    try {
      const now = new Date();
      let threeDaysAgo = new Date(now);
      threeDaysAgo.setDate(now.getDate() - 100);
      const response = await getOrder();
      const recentOrders = response.orders.filter(order => new Date(order.created_at) >= threeDaysAgo);
      setOrderRecents(recentOrders);
    } catch (error) {
      setOrders([]);
      ;
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleGetCategories = async () => {
    setIsLoading(true);
    try {
        const response = await getCategory();

        const reNameField = response.map((x) => {
          return {
            name: x.name,
            value: x.products.length
          }
        })
        setCategories(reNameField);
      } catch (error) {
        setCategories([]);
        ;
      } finally {
        setIsLoading(false);
      }
  };

  const handleGetProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getProdukObat({
        search: null,
        category_id: null,
      });
      setProducts(response.products);
    } catch (error) {
      setProducts([]);
      ;
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetUsers = async () => {
    setIsLoading(true);
    try {
      const response = await getUser();
      setUsers(response);
    } catch (error) {
      setUsers([]);
      ;
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetSuppliers = async () => {
    setIsLoading(true);
    try {
      const response = await getSupplier();
      setSuppliers(response);
    } catch (error) {
      setSuppliers([]);
      ;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetOrders();
    handleGetCategories();
    handleGetProducts();
    handleGetUsers();
    handleGetSuppliers();
    handleGetRecentOrders();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        orders,
        orderRecents,
        ordersBar,
        categories,
        products,
        users,
        suppliers,
        isLoading,

      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
