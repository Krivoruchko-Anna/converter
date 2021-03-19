import axios from "axios";

export const fetchData = async () => {
    try {
        const apiKey = '33ac2d9ba98418cfdf69'
        const url = `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`;
        const response = await axios.get(url);
        const results = response.data.results;
        const list = Object.keys(results);

        return list;
    }
    catch(e) {
        return []
    }
}

