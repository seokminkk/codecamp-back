console.log("안녕하세요~~");
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone";
function createTokenOfPhone(myphone: string, count: number) {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken(count);

    // 3. 핸드폰번호에 토큰 전송하기
    mytoken && sendTokenToSMS(myphone, mytoken);
  }
}

createTokenOfPhone("01014567833", 10);
