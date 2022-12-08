import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://free.currconv.com/api/v7',
  params: {apiKey: 'eb83db00cef855952a36'}
});

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get(`/currencies`);
    const results = response.data.results;
    const list = Object.keys(results);

    return list;
  } catch (e) {
    return [];
  }
}

export const fetchCurrency = async (firstCurrency, secondCurrency = 0) => {
  try {
    if (firstCurrency && secondCurrency) {
      const response = await axiosInstance.get(`/convert?q=${firstCurrency}_${secondCurrency}&compact=y`);
      const convertedResult = response.data[`${firstCurrency}_${secondCurrency}`];
      const result = convertedResult.val;

      return result;
    }
  } catch (e) {
    return [];
  }
}

export const fetchLocalCurrency = async (state) => {
  const local = axios.get(`http://ip-api.com/json?fields=8413185`)
    .then(response => state.selectedCurrency = response.data.currency);

  return local;
}


