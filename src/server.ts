import express from "express";

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`API rodando na porta ${process.env.PORT}`)
);
