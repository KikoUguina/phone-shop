import axios from 'axios';

const API_URL = 'https://itx-frontend-test.onrender.com/api';

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/product`);
    return response.data;
};
