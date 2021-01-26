//아웃바운드 어댑터
const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-northeast-2" });
const ses = new AWS.SES();

module.exports = class {
    constructor() {}

    async sendAwsSesEmail(params, callback) {
        // const params = this.configAwsSes(param);
        ses.sendEmail(params, function (err, data) {
            if (err) {
                callback(err, null);
                // console.log(err.message);
            } else {
                callback(null, data);
                // console.log("----------", data);
                // console.log("Email sent! Message ID: ", data.MessageId);
            }
        });
    }
    configAwsSes({ email, username }) {
        console.log("세팅------", { email, username });
        const sender = `Securist <${email}>`;
        const recipient = email;
        // const configuration_set = "ConfigSet";
        const subject = `Hi, ${username}. Securist Amazon SES Test 입니다.(AWS SDK for JavaScript in Node.js)`;
        const body_text =
            "Amazon SES Test (Node.js의 JavaScript용 SDK)\r\n" +
            "This email was sent with Amazon SES using the " +
            "AWS SDK for JavaScript in Node.js.";
        const body_html = `<html>
                <head></head>
                <body>
                  <h1>Amazon SES Test (Node.js의 JavaScript용 SDK)</h1>
                  <p>This email was sent with
                    <a href='https://aws.amazon.com/ses/'>Amazon SES</a> using the
                    <a href='https://aws.amazon.com/sdk-for-node-js/'>
                      AWS SDK for JavaScript in Node.js</a>.</p>
                </body>
                </html>`;
        const charset = "UTF-8";
        return {
            Source: sender,
            Destination: {
                ToAddresses: [recipient],
            },
            Message: {
                Subject: {
                    Data: subject,
                    Charset: charset,
                },
                Body: {
                    Text: {
                        Data: body_text,
                        Charset: charset,
                    },
                    Html: {
                        Data: body_html,
                        Charset: charset,
                    },
                },
            },
            // ConfigurationSetName: configuration_set
        };
    }
};
