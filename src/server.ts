import express, { json } from "express";
import { router } from "./routes";
import { db } from "./database/db";
import cors from "cors";

const app = express();
app.use("/files", express.static("uploads"));
app.use(json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, async () => {
  await db.sync();
  console.log(`API rodando na porta ${process.env.PORT}`);
});
