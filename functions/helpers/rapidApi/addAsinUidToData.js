const addAsinUidToData = (amazonData, airTableAsin) => {
    const result = amazonData.map((element) => {
        const amazonDataAsin = element.asin
        const matchedAsin = airTableAsin.find((airTableAsinElement) =>
            airTableAsinElement.asin === amazonDataAsin
        )
        element.asinUid = matchedAsin.asinUid
        return element
    })
    return result
}

module.exports = { addAsinUidToData }