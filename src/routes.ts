import express, { Request, Response } from "express";
import UserController from "./controllers/UserController";
import UploadController from "./controllers/UploadController";

import { storage } from "./config/multerConfig";
import multer from "multer";

const uploadMulter = multer({ storage: storage });
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

//UPLOAD
router.post("/upload", uploadMulter.single("file"), UploadController.upload);

export { router };
