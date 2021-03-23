import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://free.currconv.com/api/v7',
    params: {
        apiKey: '33ac2d9ba98418cfdf69'
    }
});

export const fetchData = async () => {
    try {
        const response = await axiosInstance.get(`/currencies`);
        const results = response.data.results;
        const list = Object.keys(results);

        return list;
    }
    catch(e) {
        return [];
    }
}

export const fetchCurrency = async (firstCurrency, secondCurrency = 0) => {
    try {
        if (firstCurrency && secondCurrency) {
            const response = await axiosInstance.get(`/convert?q=${firstCurrency}_${secondCurrency}&compact=y`);
            // const response = await axiosInstance.get(`/convert&q=${firstCurrency}_${secondCurrency}&compact=y`);
            const convertedResult = response.data[`${firstCurrency}_${secondCurrency}`];
            const result = convertedResult.val;

            return result;
        }
    }
    catch (e) {
        return [];
    }
}


