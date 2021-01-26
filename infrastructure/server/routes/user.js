const userSample = require("../../../utils/userSample");
const userController = require("../../../adapters/controllers/userController");

module.exports = (router) => {
    router.get("/user", (req, res) => {
        req.body = userSample();
        // userController.createUser(req, res);
        userController.sendEmailToUser(req, res);
    });
};
