// const coolsms = require('coolsms-node-sdk').default;
import CoolsmsMessageService, { Message } from "coolsms-node-sdk";
import coolsms from "coolsms-node-sdk";
import * as dotenv from "dotenv";
dotenv.config();
const messageService = new coolsms(
  process.env.SMS_API_KEY!,
  process.env.SMS_SECRET_KEY!
);

const list: Message[] = [
  {
    to: "01099531506",
    from: "01099531506",
    text: "한글 45자, 영자 90자 이하 입력되면 자동으로 SMS타입의 메시지가 발송됩니다.",
    autoTypeDetect: true,
  },
  {
    to: "01099531506",
    from: "01012345678",
    text: "한글 45자, 영자 90자 이상 입력되면 자동으로 LMS타입의 문자메시지가 발송됩니다. 0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    autoTypeDetect: false,
  },
  // 1만건까지 추가 가능
];
export function checkValidationPhone(myphone: string) {
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true; // 검증 통과
  }
}

export function getToken() {
  const count = 6;
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
  // console.log(result);
}

export async function sendTokenToSMS(myphone: string, token: string) {
  console.log(myphone + "번호로 인증번호" + token + "를 전송합니다!!!");
  const result = await messageService
    .sendOne({
      to: myphone,
      from: "01099531506",
      text: `smstest token ! 토큰은 ${token}`,
      autoTypeDetect: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  console.log("메세지", result);
}
