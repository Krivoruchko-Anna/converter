import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'https://free.currconv.com/api/v7',
    params: {
        apiKey: '33ac2d9ba98418cfdf69'
    }
});

export const fetchData = async () => {
    try {
        const response = await axiosInstance.get(`/currencies?apiKey=`);
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
            const response = await axiosInstance.get(`/convert?apiKey=&q=${firstCurrency}_${secondCurrency}&compact=y`);
            const convertedResult = response.data[`${firstCurrency}_${secondCurrency}`];
            const result = convertedResult.val;

            return result;
        }
    }
    catch (e) {
        return [];
    }
}

// export const fetchCurrencyObject = async (firstCurrency) => {
//     try {
//         if (firstCurrency) {
//             const promise1 = axiosInstance.get(`convert?apiKey=&q=AUD_${firstCurrency}&compact=y`)
//             // const promise2 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=USD_${firstCurrency}&compact=y`);
//             // const promise3 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=EUR_${firstCurrency}&compact=y`);
//             // const promise4 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=GBP_${firstCurrency}&compact=y`);
//             // const promise5 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=JPY_${firstCurrency}&compact=y`);
//
//             // [promise1, promise2, promise3, promise4, promise5]
//
//             return Promise.all([promise1])
//                 .then(function (values) {
//                     let all = [];
//                     values.map(item => {
//                         all.push(item.data);
//                     })
//                     return all;
//                 });
//         }
//     }
//     catch (e) {
//         return {};
//     }
// }


export const fetchCurrencyObject = async (firstCurrency) => {
    try {
        if (firstCurrency) {

            const promise1 = axiosInstance.get(`convert?apiKey=&q=AUD_${firstCurrency}&compact=y`)
            // const promise2 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=USD_${firstCurrency}&compact=y`);
            // const promise3 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=EUR_${firstCurrency}&compact=y`);
            // const promise4 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=GBP_${firstCurrency}&compact=y`);
            // const promise5 = axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=JPY_${firstCurrency}&compact=y`);

            // [promise1, promise2, promise3, promise4, promise5]

            return Promise.all([promise1])
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


