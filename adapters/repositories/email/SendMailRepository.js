//아웃바운드 인터페이스 : 비즈니스로직과 infra가 참조하는 부분

//여기서는 infra를 뭘쓰든 상관없어야 한다.
module.exports = class {
    constructor(infrastructure) {
        this.infrastructure = infrastructure;
    }

    async sendCheckEmail(userEntity) {
        console.log("sendMailRepository.js - sendCheckEmail 실행", userEntity);
        // const params = this.infrastructure.infraConfig(userEntity);
        try {
            const result = await this.infrastructure.sendEmail(userEntity);
            console.log("센드 메일 레파지토리 결과", result);
            return result;
        } catch (err) {
            console.log("센드 메일 레파지토리 결과", err);
        }
    }
};
