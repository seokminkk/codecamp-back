console.log("안녕하세요~~");

function checkValidationPhone(myphone: string) {
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

function getToken(count: number) {
  if (count === undefined) {
    console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!");
    return;
  } else if (count <= 0) {
    console.log("에러 발생!!! 갯수가 너무 적습니다!!!");
    return;
  } else if (count > 10) {
    console.log("에러 발생!!! 갯수가 너무 많습니다!!!");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  return result;
  // console.log(result)
}

function sendTokenToSMS(fff: string, ggg: string) {
  console.log(fff + "번호로 인증번호" + ggg + "를 전송합니다!!");
}

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

createTokenOfPhone("01014567833", 15);
