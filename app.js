/**
 * class User는 매개변수 username과 email 정보를 받아서
 * 객체를 만드는 목적의 생성자 함수이다.
 */

class User {
  constructor(username, email){
    this.username = username;
    // 객체의 값을 부여하는데, '적절한' 값이어야만 대입이 되도록
    // setter 함수를 통해 return 처리를 분해해서 진행한다.
    // 참인 경우 - 은닉화된 key 값인 _email에 값을 대입하고,
    // 거짓인 경우 - null 대입
    // 여기서 null은 '존재(자리)하지만 값이 없는' 상태를 의미
    // 에러를 내지 않고 null을 대입해서 무분별한 에러를 방지

    if(this.validataEmail(email)){
      this._email = email;
    }else {
      this._email = null; // null 데이터 타입의 값어치
    }
  }




}