import axios from "axios";
const apiKey = '33ac2d9ba98418cfdf69';

export const fetchData = async () => {
    try {
        const url = `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`;
        const response = await axios.get(url);
        const results = response.data.results;
        const list = Object.keys(results);

        return list;
    }
    catch(e) {
        return [];
    }
}

export const fetchCurrency = async (firstCurrency, secondCurrency) => {
    try {
        if (firstCurrency && secondCurrency) {
            const url = `https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=${firstCurrency}_${secondCurrency}&compact=y`;
            const response = await axios.get(url);
            const convertedResult = response.data[`${firstCurrency}_${secondCurrency}`];
            const result = convertedResult.val;

            return result;
        }
    }
    catch (e) {
        return [];
    }
}
