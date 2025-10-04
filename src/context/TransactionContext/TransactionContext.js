import React from "react";
import { getTransactionById } from "../../services/Transaction/api";
import { useAuthContext } from "../AuthContext/AuthContext";

export const TransactionContext = React.createContext()

export const useTransactionContext = () => {
    return React.useContext(TransactionContext)
}



const TransactionContextProvider = ({ children }) => {
    const { user } = useAuthContext()
    const [id, setId] = React.useState(0)
    const [userId, setUserId] = React.useState()
    const [isLoading, setIsLoading] = React.useState(false)
    const [transactionDetail, setTransactionDetail] = React.useState()

      // ✅ sync userId dari AuthContext
      React.useEffect(() => {
        if (user?.id) {
          setUserId(user.id);
        }
      }, [user]);

     const handleGetTransactionById = async (id) => {
        setIsLoading(true)
        try {
            const response = await getTransactionById({
                id
            })
            setTransactionDetail(response.transaction)
        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }
    }
    // useDebounce(handleGetTransactions, 500, [typeFilter])

    const valueContext = {
        id,
        setId,
        userId,
        handleGetTransactionById,
        setUserId,
        isLoading,
        setIsLoading,
        transactionDetail,
    }

    return (
        <TransactionContext.Provider value={valueContext}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider