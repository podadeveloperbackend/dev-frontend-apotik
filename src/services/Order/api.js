import api from "../apiMethod"

const getOrder = async (params) => {
    try {
        const response = await api.methodGet("/order", params)
        return response
    } catch (error) {
        
        throw error
    }
}

const getOrderById = async ({ id }) => {
    try {
        const response = await api.methodGet(`/order/${id}`)
        return response
    } catch (error) {
        
        throw error
    }
}

const getOrderUserId = async ({ userId }) => {
    try {
        const response = await api.methodGet(`/order/user/${userId}`)
        return response
    } catch (error) {
        
        throw error
    }
}

const createOrder = async (data) => {
    try {
        const response = await api.methodPost("/order", data, true)
        return response
    } catch (error) {
        
        throw error
    }
}

const createOrderCashier = async (data) => {
    try {
        const response = await api.methodPost("/order/cashier", data, true)
        return response
    } catch (error) {
        
        throw error
    }
}

const changeStatusOrder = async (id, data) => {
    try {
        const response = await api.methodPut(`/order/${id}`, data)
        return response
    } catch (error) {
        
        throw error
    }
}

const inputResi = async (id, data) => {
    try {
        const response = await api.methodPut(`/order/${id}`, data)
        return response
    } catch (error) {
        
        throw error
    }
}

export { getOrder, getOrderUserId, getOrderById, createOrder, changeStatusOrder, inputResi, createOrderCashier }