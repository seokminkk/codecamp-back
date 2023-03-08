export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "boards api 명세서",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.ts"], // files containing annotations as above
};
