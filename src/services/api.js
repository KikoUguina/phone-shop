import axios from 'axios';

const API_URL = 'https://itx-frontend-test.onrender.com/api';

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/product`);
    return response.data;
};

export const getProductById = async (id) => {
    const response = await axios.get(`https://itx-frontend-test.onrender.com/api/product/${id}`);
    return response.data;
};

export const addToCart = async ({ id, colorCode, storageCode }) => {
    const response = await axios.post('https://itx-frontend-test.onrender.com/api/cart', {
        id,
        colorCode,
        storageCode
    });

    return response.data;
};
