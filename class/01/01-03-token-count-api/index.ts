function createTokenOfPhone(myphone: string, count: number) {
  if (myphone.length !== 10 && myphone.length !== 11) {
    // 에러 메세지를 콘솔에 출력
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");

    return; // 함수 종료
  }
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
  const result = String(Math.floor(Math.random() * 10 ** 6)).padStart(
    count,
    "0"
  );
  console.log(result);
  console.log(myphone + "번호로 인증번호" + result + "를 전송합니다!!!");
}

// API 실행하기

createTokenOfPhone("01034567899", 6);
