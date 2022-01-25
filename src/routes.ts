import { Request, Response } from "express";
import CreateUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = CreateUser({
    email: "helton.quit@gmail.com",
    password: "123456",
    techs: [
      "Nodejs",
      "React",
      "React Native",
      { title: "Javascript", experience: 100 },
    ],
  });

  return res.json({ message: "Hello world" });
}
