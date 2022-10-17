import express, { json } from "express";
import { router } from "./routes";
import cors from "cors";
import { db } from "./database/db";

const app = express();
app.use(json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, async () => {
  await db.sync();
  console.log(`API rodando na porta ${process.env.PORT}`);
});
