console.log("hi");

function getToken(count: number) {
  // const result = String(Math.floor(Math.random() * 1000000)).padStart(count, "0");
  const result = String(Math.floor(Math.random() * 1000000)).slice(0, count);

  console.log(result); // 만들어진 토큰 출력
}

getToken(5);
