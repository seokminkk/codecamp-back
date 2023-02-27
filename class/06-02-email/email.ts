import nodemailer from "nodemailer";

export function checkValidationEmail(email: any) {
  if (email === undefined || !email.includes("@")) {
    console.log("정확한 이메일 주소를 입력해주세요.");
    return false;
  } else {
    return true;
  }
}
export function getWelcomeTemplate({ name, age, school }: any) {
  return `
      <html>
          <body>
              <h1>${name}님 가입을 환영합니다.</h1>
              <hr />
              <div>이름: ${name}</div>
              <div>나이: ${age}살</div>
              <div>학교: ${school}</div>
              <div>가입일: 2022-3-22</div>
          </body>
      </html>
  `;
}
export async function sendWelcomeTemplateToEmail(email: any, template: any) {
  // 템플릿을 이메일에 전송
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADRESS,
      pass: process.env.NODE_MAIL_PWD,
    },
  });
  const result = await transporter
    .sendMail({
      from: "ghdtjrals16@gmail.com",
      to: email,
      subject: "[코드캠프] 가입을 축하합니다!!!",
      html: template,
    })
    .then((res) => console.log("email then ", res));
  console.log(result);

  console.log(email + "이메일로 가입환영템플릿 " + template + "를 전송합니다.");
}
