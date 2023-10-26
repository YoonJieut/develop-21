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

  // '가져오는', '읽어오는' 작업을 할 수 있는 getter 기능으로
  // 읽기 전용 (readonly) 프로퍼티를 정의한다.
  // getter 함수는 키워드 get을 사용한다.
  // 실제 값인 _email을 새로 대입하거나 변경하는 목적이 아닌,
  // 읽어오는 목적으로만 사용한다.

  get email() {
    return this._email;
  }


}