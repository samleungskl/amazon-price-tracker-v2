//prepare data in a AirTable accepted format for updating a field, by including the id into the object
const matchDataWithUid = (airtableAsin, formattedData) => {
    const dataWithID = formattedData.map((element) => {
        const asin = element.fields.asin
        const airTabbleID = airtableAsin.find((element) =>
            element.asin === asin
        )

        element.id = airTabbleID.asinUid
        return element
    })
    return dataWithID
}

module.exports = { matchDataWithUid }