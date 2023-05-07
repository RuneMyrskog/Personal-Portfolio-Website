const functions = require("firebase-functions");

const twilio = require('twilio');
const cors = require('cors')({ origin: true });

const twilioNumber = process.env.TWILIO_NUMBER;
const myPhoneNumber = process.env.MY_NUMBER;


// exports.sendSMS = functions.runWith({secrets: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"]}).https.onRequest((request, response) => {
//     return cors(request, response, async () => {
//         functions.logger.info("RECEIVED REQUEST: " + JSON.stringify(request.body), { structuredData: true });
//         const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
//         const name = request.body.name;
//         const email = request.body.email;
//         const message = request.body.message;
//         client.messages.create({
//             to: myPhoneNumber,
//             from: twilioNumber,
//             body: 'Message from (' + name + ' - ' + email + '): \n\n' + message,

//         }).then((message) => response.send("Message sent (id: " + message.sid + ")"));
//     });
    
// });

exports.sendSMSv2 = functions.runWith({ secrets: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"] }).https.onRequest((request, response) => {
    return cors(request, response, async () => {
        functions.logger.info("RECEIVED REQUEST: " + JSON.stringify(request.body), { structuredData: true });
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        const name = request.body.name;
        const email = request.body.email;
        const message = request.body.message;
        client.messages.create({
            to: myPhoneNumber,
            from: twilioNumber,
            body: 'Message from (' + name + ' - ' + email + '): \n\n' + message,

        }).then((message) => response.send("Message sent (id: " + message.sid + ")"));
    });

});
