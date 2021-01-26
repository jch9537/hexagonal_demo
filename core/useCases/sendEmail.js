// 비즈니스 로직 - 어플리케이션의 프로세스에 대한 코드
const UserEntity = require("../domain/userEntity");

module.exports = class {
    constructor(SendMailRepository) {
        this.SendMailRepository = SendMailRepository;
    }

    async excute({ email, username }) {
        try {
            console.log("useCase/sendEmail.excute 실행", email, username);
            const userEntity = new UserEntity({ email, username });
            const result = await this.SendMailRepository.sendCheckEmail(
                userEntity
            );
            console.log("비즈니스 로직 결과", result);
            return result;
        } catch (err) {
            console.log("비즈니스로직 에러", err);
        }
    }
};

/* ses를 연결하는 레파지토리에 메일전달
        await this.userRepository.sesEmail(email)
        return "메일전송 성공!!"
        */
