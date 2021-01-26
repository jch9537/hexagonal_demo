//인바운트 어댑터 :
const Joi = require("joi");
const { CreateUser, SendEmail } = require("../../core/useCases/index");
const { UserRepository, SendMailRepository } = require("../repositories/index");
//input data를 비즈니스로직에 편리한 형태로 가공해서 보냄
module.exports = {
    async sendEmailToUser(req, res) {
        try {
            //인바운드 포트
            const useCase = new SendEmail(SendMailRepository);
            const welcomeMessage = await useCase.excute(req.body);
            // console.log("welcomeMessage", welcomeMessage);
            res.status(201).send(
                `Email sent! Message ID: ${welcomeMessage.MessageId}`
            );
        } catch (error) {
            console.log(error);
            res.status(500).send(`Fail to send mail ${error}`);
        }
    },

    async createUser(req, res) {
        console.log("크리에이트 유저", req.body);
        try {
            const schema = Joi.object({
                email: Joi.string().required().email(),
                username: Joi.string().required(),
            });
            const { error } = schema.validate(req.body);
            //요청의 유효성 검사
            //유효성 에러발생시 에러처리

            if (error) {
                res.status(400).send(
                    "올바르지 않은 요청입니다. 이메일과 이름을 확인해주세요"
                );
            }
            const useCase = new CreateUser(UserRepository);
            const result = await useCase.excute(req.body);
            return result;
        } catch (error) {
            res.status(500).send(`Fail to create User ${error}`);
        }
    },
};
