module.exports = class {
    constructor() {}
    async createUser() {
        //요청 이메일이 이미 가입되어 있는지 확인 > 가입되어있다면 중복메세지 전달
        //가입되어있지 않다면 비밀번호 암호화 후 사용자 가입정보(userEntity에 전달)
        //가입정보 생성(저장) 후 확인메일발송
        console.log("userRepository.js - createUser 실행", userEntity);
    }
};
