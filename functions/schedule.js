import fetch from 'node-fetch';
import createData from './helpers/airtable/createData';
import updateData from './helpers/airtable/updateData';
import { matchDataWithUid } from './helpers/rapidApi/matchDataWithUid';
import { formatAsinData } from './helpers/rapidApi/formattedAsinData';
import { formatPriceData } from './helpers/rapidApi/formattedPriceData';
import { send_sms } from './helpers/twilio/sendSms';
const getAmazonData = require ('./helpers/rapidApi/rapidApiGetData')


const handler = async function (event, context) {
    // console.log("Received event:", event)
    const loadData = async () => {

        try {
            const res = await fetch('http://localhost:8888/.netlify/functions/data')
            const result = await res.json()
            const amazonJson = await getAmazonData(result.asinArray)
            const cleanedAmazonPriceData = await formatPriceData(amazonJson)
            const cleanedAmazonAsinData = await formatAsinData(amazonJson)
            const dataWithUid = await matchDataWithUid(result.asin, cleanedAmazonAsinData)
            // console.log('dataWithUid = ', dataWithUid)
            // createData(cleanedAmazonPriceData, 'data')
            // updateData(dataWithUid, 'asin')
            send_sms('This is a test message.')
        } catch (error) {
            console.error(error);
        }
    }
    loadData()
    return {
        statusCode: 200,
    };
};

module.exports.handler = handler;