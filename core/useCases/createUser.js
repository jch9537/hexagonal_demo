const UserEntity = require("../domain/userEntity");

module.exports = class {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async excute({ email, username }) {
        try {
            console.log("useCase/createUser.excute 실행", email, username);
            const userEntity = new UserEntity({ email, username });
            const result = await this.userRepository.createUser(userEntity);
            return result;
        } catch (err) {
            console.log("비즈니스로직 createUser에러", err);
        }
    }
};
