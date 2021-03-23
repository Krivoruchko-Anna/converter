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

export const fetchCurrencyObject = async (firstCurrency) => {
    try {
        if (firstCurrency) {
            const promise1 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=AUD_${firstCurrency}&compact=y`);
            const promise2 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=USD_${firstCurrency}&compact=y`);
            const promise3 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=EUR_${firstCurrency}&compact=y`);
            const promise4 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=GBP_${firstCurrency}&compact=y`);
            const promise5 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=JPY_${firstCurrency}&compact=y`);

            return Promise.all([promise1, promise2, promise3, promise4, promise5])
                .then(function (values) {
                    let all = [];
                    values.map(item => {
                        all.push(item.data);
                    })
                    return all;
                });
        }
    }
    catch (e) {
        return {};
    }
}


