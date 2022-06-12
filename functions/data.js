const getData = require ('./helpers/airtable/getData')

exports.handler = async (event) => {
    if (event.httpMethod === 'GET'){
        return await getData(event);
    }
}