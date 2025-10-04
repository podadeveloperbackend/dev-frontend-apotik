import api from "../apiMethod";

const getUser = async (params) => {
    try {
        const response = await api.methodGet("/users", params);
        return response.user;
    } catch (error) {
        ;
        throw error;
    }
};

const createUser = async (data) => {
    try {
        const response = await api.methodPost("/users", data);
        return response;
    } catch (error) {
        ;
        throw error;
    }
};

const updateUser = async (id, data) => {
    try {
        const response = await api.methodPut(`/users/${id}`, data);
        return response;
    } catch (error) {
        ;
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        const response = await api.methodDelete(`/users/${id}`);
        return response;
    } catch (error) {
        ;
        throw error;
    }
};

export { getUser, createUser, updateUser, deleteUser }