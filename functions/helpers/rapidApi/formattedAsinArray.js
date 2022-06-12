const formatAsinArray = (AsinArray) => {
// %2C represent the % sign to represent & in the url
    return AsinArray.join('%2C')
}

module.exports = { formatAsinArray }