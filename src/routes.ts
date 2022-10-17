import express, { Request, Response } from "express";
import UserController from "./controllers/UserController";

const router = express.Router();

//TEST
router.get("/", (req: Request, res: Response) =>
  res.json({ message: "Bem vindo a API" })
);

//CREATE
router.post("/users", UserController.create);

//READ
router.get("/users", UserController.findAll);

//READ ID
router.get("/users/:userId", UserController.findOne);

//PUT
router.put("/users/:userId", UserController.update);

//DELETE
router.delete("/users/:userId", UserController.destroy);

export { router };
