import fetch from 'node-fetch';
import createData from './helpers/airtable/createData';
import updateData from './helpers/airtable/updateData';
import { formatAsinData } from './helpers/rapidApi/formattedAsinData';
import { formatPriceData } from './helpers/rapidApi/formattedPriceData';
import { send_sms } from './helpers/twilio/sendSms';
import { priceNotificationLogic } from './helpers/twilio/priceNotificationLogic';
import { addAsinUidToData } from './helpers/rapidApi/addAsinUidToData';
const getAmazonData = require('./helpers/rapidApi/rapidApiGetData')


const handler = async function (event, context) {
    try {
        const res = await fetch('https://samskleung-amazon-tracker.netlify.app/.netlify/functions/data')
        const result = await res.json()
        console.log('result = ', result)
        const amazonJson = await getAmazonData(result.asinArray)
        const amazonDataWithAsinUid = await addAsinUidToData(amazonJson, result.asin)
        console.log('amazonDataWithAsinUid = ', amazonDataWithAsinUid)
        const cleanedAmazonAsinData = await formatAsinData(amazonJson)
        updateData(cleanedAmazonAsinData, 'asin')

        // const cleanedAmazonPriceData = await formatPriceData(amazonDataWithAsinUid)
        // const testData = [{
        //     "fields": {
        //         dataPrice: 12.99,
        //         dataAsin: ['recd2CCXBc7Gr2g4z'],
        //     }
        // }]
        // createData(testData, 'data')

        // const fectchResult = await fetch('http://localhost:8888/.netlify/functions/data')
        // const fectchResultJson = await fectchResult.json()
        // const arrayOfMessage = priceNotificationLogic(fectchResultJson.asin)
        // console.log('arrayOfMessage = ', arrayOfMessage)
        // send_sms(arrayOfMessage)
    } catch (error) {
        console.error(error);
    }

    return {
        statusCode: 200,
    };
};

module.exports.handler = handler;