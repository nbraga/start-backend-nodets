import { Request, Response } from "express";

class UploadController {
  async upload(req: Request, res: Response) {
    return res.json(req.file.filename);
  }
}

export default new UploadController();
