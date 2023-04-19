import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendWelcomeTemplateToEmail,
} from "./email";
import mongoose from "mongoose";
import { Board } from "./models/bords.model";

const swaggerSpec = swaggerJsdoc(options);
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// GET 요청이 들어왔을 때

app.get("/boards", async (req, res) => {
  // boards로 엔드포인트 수정

  // const result = [
  //   {
  //     number: 1,
  //     writer: "철수",
  //     title: "제목입니다~~",
  //     contents: "내용이에요@@@",
  //   },
  //   {
  //     number: 2,
  //     writer: "영희",
  //     title: "영희 제목입니다~~",
  //     contents: "영희 내용이에요@@@",
  //   },
  //   {
  //     number: 3,
  //     writer: "훈이",
  //     title: "훈이 제목입니다~~",
  //     contents: "훈이 내용이에요@@@",
  //   },
  // ];

  const result = await Board.find();

  // const findData = result.filter(
  //   (el) => `${el.number}` === req.query.number
  // )[0];

  // if (findData) {
  //   res.send(findData);
  // } else {
  //   res.send(`잘못찾은거같은데 전체보여줄게${JSON.stringify(result)}`); // 응답 보내기
  // }
  res.send(result);
});

app.post("/boards", async (req, res) => {
  console.log(req.body);

  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents,
  });
  await board.save();
  res.send("게시물 등록 성공");
});

app.post("/tokens/phone", (req, res) => {
  // req.body 객체의 myphone의 값을 myphone이라는 변수에 담기.
  const myphone = req.body.myphone;

  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();

    // 3. 핸드폰번호에 토큰 전송하기

    mytoken && sendTokenToSMS(myphone, mytoken);
    res.send("인증완료!!!");
  } else {
    res.send("에러");
  }
});

app.post("/users", (req, res) => {
  const user = req.body.myuser;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate(user);

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendWelcomeTemplateToEmail(user.email, mytemplate);
    res.send("가입완료!!!");
  }
});

const myUser = {
  name: "철수",
  age: 13,
  school: "다람쥐초등학교",
  email: "2010-09-07",
};
//몽고db접속
mongoose.connect("mongodb://my-database:27017/dockerDB");

//백엔드 api서버 실행
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
}); // 3000번 포트에서 실행
