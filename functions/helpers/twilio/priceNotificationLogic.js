const priceNotificationLogic = (airtableData) => {
    const filteredAsin =  airtableData.filter((element) =>
        element.asinDesiredPrice >= element.asinCurrentPrice
    )

    const result = filteredAsin.map((element)=>{
        return `'${element.asinName}' is now $${element.asinCurrentPrice}. Buy now at ${element.asinFullUrl}!`
    })
    return result
}
module.exports = { priceNotificationLogic }