//아웃바운드 어댑터 : 사용할 어떤 인프라를 연결
const AwsMail = require("./ses_sendemail");

let infra;

module.exports = class {
    constructor() {
        if (infra) {
            return;
        }
        infra = new AwsMail();
    }

    async sendEmail(params) {
        const parameter = this.infraConfig(params);
        return new Promise((resolve, reject) => {
            infra.sendAwsSesEmail(parameter, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    infraConfig(parameter) {
        return infra.configAwsSes(parameter);
    }
};
