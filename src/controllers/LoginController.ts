import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "./../models/UserModel";

class LoginController {
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const user = await UserModel.findOne({
      where: {
        email: email,
      },
      raw: true,
    });

    const password = await bcrypt.compare(senha, user.senha);

    if (!user) {
      res.status(404).json({ message: ["Usuário não encontrado!"] });
      return;
    }

    if (!password) {
      res.status(422).json({ message: ["Senha inválida!"] });
      return;
    }

    const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, {
      expiresIn: 300,
    });

    return res.json({ auth: true, token });
  }
}

export default new LoginController();
