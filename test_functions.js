const fetch = require("node-fetch");

var data = {
    name: "my name",
    email: "my email",
    message: "my message"
}

fetch(`http://localhost:5001/personal-portfolio-24a80/us-central1/sendSMS`, {
    method: "post",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
})