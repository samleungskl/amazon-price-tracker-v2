//prepare data in a AirTable accepted format
const formatAsinData = (returnedAmazonData) => {
    return returnedAmazonData.map((element) => {
        return {
            "fields": {
                asin: element.asin,
                asinName: element.product_name,
                asinImageUrl: element.image_url,
                asinCurrentPrice: element.current_price,
                asinFullUrl: `https://www.amazon.ca/dp/${element.asin}`,
            }
        }
    })
}

module.exports = { formatAsinData }