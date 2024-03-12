import api from "./apiConfig.js";

export const getShows = async () => {
    try {
        const response = await api.get("/shows");
        return response.data;
    } catch (error) {
        console.error("Error Getting all Shows: ", error);
    }
};

export const getShow = async (title) => {
    try {
        const response = await api.get(`/shows/${title}`);
        return response.data;
    } catch (error) {
        console.error("Error getting show: ", error);
    }
}

export const createShow = async (showData) => {
    try {
        const response = await api.post("/shows", showData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const editShow = async (title, showData) => {
    try {
        const response = await api.put(`/shows/${title}`, showData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteShow = async (title) => {
    try {
        const response = await api.delete(`/shows/${title}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};