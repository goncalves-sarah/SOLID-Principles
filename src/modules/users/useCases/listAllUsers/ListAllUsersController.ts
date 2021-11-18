import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(req: Request, res: Response): Response {
    const user_id = req.headers.user_id as string;

    try {
      const all = this.listAllUsersUseCase.execute({ user_id });

      return res.json(all);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
