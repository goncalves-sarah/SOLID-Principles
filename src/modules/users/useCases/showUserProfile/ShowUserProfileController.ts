import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(req: Request, res: Response): Response {
    const { user_id } = req.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });

      return res.json(user);
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
