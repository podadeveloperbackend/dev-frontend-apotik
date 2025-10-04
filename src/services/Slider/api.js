import api from "../apiMethod";

const getSlider = async (params) => {
    try {
        const response = await api.methodGet("/sliders", params);
        return response.sliders;
    } catch (error) {
        ;
        throw error;
    }
};

const createSlider = async (data) => {
    try {
        const response = await api.methodPost("/sliders", data);
        return response;
    } catch (error) {
        ;
        throw error;
    }
};

const deleteSlider = async (id) => {
    try {
        const response = await api.methodDelete(`/sliders/${id}`);
        return response;
    } catch (error) {
        ;
        throw error;
    }
};

export { getSlider, createSlider, deleteSlider }