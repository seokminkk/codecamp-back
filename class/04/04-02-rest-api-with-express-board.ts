import express from "express";

const app = express();
app.use(express.json());
// GET 요청이 들어왔을 때
app.get("/boards", (req, res) => {
  // boards로 엔드포인트 수정
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다~~",
      contents: "내용이에요@@@",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희 제목입니다~~",
      contents: "영희 내용이에요@@@",
    },
    {
      number: 3,
      writer: "훈이",
      title: "훈이 제목입니다~~",
      contents: "훈이 내용이에요@@@",
    },
  ];

  res.send(result); // 응답 보내기
});

app.post("/boards", (req, res) => {
  console.log(req.body);
  res.send("게시물 등록 성공");
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
}); // 3000번 포트에서 실행
