const { base } = require('./airtable');
const formattedReturn = require('./formattedReturn')

module.exports = async (amazonData, tableName) => {
    try {
        const createdCourse = await base(tableName).update(amazonData);
        return formattedReturn(200, createdCourse);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, { msg: 'Something went wrong during row creation' });
    }
}