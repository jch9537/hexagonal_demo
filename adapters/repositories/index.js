const UserRepository = require("./SQL/userRepository");
const SendMailRepository = require("./email/SendMailRepository");
const infra = require("../../infrastructure/aws/index");
const database = require("../../infrastructure/database/index");

const infrastructure = new infra();
const db = new database();

module.exports = {
    SendMailRepository: new SendMailRepository(infrastructure),
    UserRepository: new UserRepository(db),
};
