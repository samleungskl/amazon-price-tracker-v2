const { base } = require('./airtable');
const formattedReturn = require('./formattedReturn')

module.exports = async (event) => {
    try {
        //extract only useful data from airtableAPI
        const extractFieldData = (dataAryOfObj) => {
            const result = dataAryOfObj.map(element => {
                return element.fields
            });
            return result
        }

        const data = await Promise.all([
            base('asin').select({ view: 'asin' }).all(),
            base('data').select({ view: 'allData' }).all(),
        ])
        const extractedData = data.map((element) => {
            const fieldData = extractFieldData(element)
            return fieldData
        })

        const asinArray = extractedData[0].map((element) =>{
            return element.asin
        })

        const result ={
            asinArray: asinArray,
            asin: extractedData[0],
            data: extractedData[1],

        }
        return formattedReturn(200, result);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, { msg: 'Something went wrong' });
    }
}