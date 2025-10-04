import api from "../apiMethod"


const getTransactionById = async ({ id }) => {
    try {
        const response = await api.methodGet(`/cashier/transaction/${id}`)
        return response
    } catch (error) {
        
        throw error
    }
}



export { getTransactionById }