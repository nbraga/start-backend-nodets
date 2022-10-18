import { UserModel } from "./../models/UserModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { userId } = req.params;

    const user = await UserModel.findOne({
      where: {
        id: userId,
      },
    });
    return user ? res.status(200).json(user) : res.status(404).send();
  }

  async create(req: Request, res: Response) {
    const { email, senha, nome, idade } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);

    const user = await UserModel.create({
      email,
      senha: hashedPassword,
      nome,
      idade,
    });
    return res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const { userId } = req.params;

    await UserModel.update(req.body, {
      where: {
        id: userId,
      },
    });
    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { userId } = req.params;

    await UserModel.destroy({ where: { id: userId } });

    return res.status(204).send();
  }
}

export default new UserController();
