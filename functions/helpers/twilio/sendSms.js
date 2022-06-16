require('dotenv').config();

const send_sms = function (messageArray) {
    const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
    const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.REACT_APP_TWILIO_SERVICE_SID;
    const toPhoneNumber = process.env.REACT_APP_TWILIO_TO_PHONE_NUMBER;
    const client = require('twilio')(accountSid, authToken);

    messageArray.map((message) => {
        client.messages
            .create({
                messagingServiceSid: serviceSid,
                body: `${message}`,
                to: `+1${toPhoneNumber}`
            })
            .then(message => {
                console.log(message.sid)
                console.log(`Message sent`)
            })
            .done();
    })
}

module.exports = { send_sms };
