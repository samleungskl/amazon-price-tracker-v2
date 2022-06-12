require('dotenv').config();
import fetch from 'node-fetch';
import { formatAsinArray } from './formattedAsinArray';

const rapidApiKey = process.env.REACT_APP_RAPIDAPI_KEY;
const rapidApiHost = process.env.REACT_APP_RAPIDAPI_HOST;
const rapidApiUrl = process.env.REACT_APP_RAPIDAPI_URL;

module.exports = async (asinArray) => {

    const resultWithPercentage = formatAsinArray(asinArray)
    const url = `https://amazon-product-price-data.p.rapidapi.com/product?asins=${resultWithPercentage}&locale=CA`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': rapidApiHost
        }
    };

    try {
        const amazon = await fetch(url, options)
        const amazonJson = await amazon.json()
        return amazonJson
    } catch (error) {
        console.error(error);
    }


}