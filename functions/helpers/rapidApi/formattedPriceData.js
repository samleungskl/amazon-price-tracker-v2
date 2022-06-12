//prepare data in a AirTable accepted format
const formatPriceData = (returnedAmazonData) => {
    return returnedAmazonData.map((element) => {
        return {
            "fields": {
                dataPrice: element.current_price,
                dataAsin: element.asin,
            }
        }
    })
}

module.exports = { formatPriceData }