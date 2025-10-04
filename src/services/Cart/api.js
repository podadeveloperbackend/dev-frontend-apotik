import api from "../apiMethod"

const getCart = async(params) => {
    try {
        const fixParams = {
            id: params.id,
        }
        const response = await api.methodGet("/carts", fixParams)
        return response
    } catch (error) {
        
        throw error
    }
}

const createCart = async(data) => {
    try {
        const response = await api.methodPost("/carts", data)
        return response
    } catch (error) {
        
        throw error
    }
}

const updateCart = async(id, data) => {
    try {
        const response = await api.methodPut(`/carts/${id}`, data)
        return response
    } catch (error) {
        
        throw error
    }
}

const deleteCart = async(id) => {
    try {
        const response = await api.methodDelete(`/carts/${id}`)
        return response
    } catch (error) {
        
        throw error
    }
}

export { getCart, createCart, updateCart, deleteCart }