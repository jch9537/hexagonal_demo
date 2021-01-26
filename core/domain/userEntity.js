//어플리케이션의 business rule 들
module.exports = class {
    constructor({ email, username }) {
        (this.email = email), (this.username = username);
    }
};
