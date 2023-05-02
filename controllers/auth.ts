import UserModel from "../models/user.model";
import createHttpError from "http-errors";
import { RequestHandler } from "express";
import bcrypt from "bcrypt";


interface SignUpBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  rePassword?: string;
}

interface LogInBody {
  email?: string;
  password?: string;
}

//CREATE AN USER
export const signUp: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password: rawPassword,
    rePassword,
  } = req.body;
  try {
    if (!firstName)
      throw createHttpError(400, "Хэрэглэгчийн нэр заавал шаардлагатай.");
    if (!lastName)
      throw createHttpError(400, "Хэрэглэгчийн оврг заавал шаардлагатай.");
    if (!email)
      throw createHttpError(400, "Хэрэглэгчийн и-мэйл заавал шаардлагатай.");
    if (!phone)
      throw createHttpError(400, "Хэрэглэгчийн утас заавал шаардлагатай.");
    if (!rawPassword)
      throw createHttpError(400, "Хэрэглэгчийн нууц үг заавал шаардлагатай.");
    if (rawPassword !== rePassword)
      throw createHttpError(400, "Нууц үг таарахгүй байна.");

    const passwordChecker = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    if (!passwordChecker.test(rawPassword))
      throw createHttpError(400, "Нууц үг шаардлага хангахгүй байна.");

    const emailChecker = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/gi, "gm");
    if (!emailChecker.test(email))
      throw createHttpError(400, "И-мэйл хаяг буруу байна.");

    const phoneChecker = new RegExp("^[89]\\d{7}$");
    if (!phoneChecker.test(phone))
      throw createHttpError(400, "Утасны дугаар буруу байна.");

    const isEmailExist = await UserModel.findOne({ email });
    if (isEmailExist)
      throw createHttpError(
        400,
        `${email} хаягтай хэрэглэгч бүртгэлтэй байна.`
      );

    const isPhoneExist = await UserModel.findOne({ phone });
    if (isPhoneExist)
      throw createHttpError(
        400,
        `${phone} утастай хэрэглэгч бүртгэлтэй байна.`
      );

    const hashedPassword = await bcrypt.hash(rawPassword, 12);

    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Амжилттай бүртгэгдлээ" });
  } catch (error) {
    next(error);
  }
};

export const logIn: RequestHandler<
  unknown,
  unknown,
  LogInBody,
  unknown
> = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email)
      throw createHttpError(400, "Нэвтрэхийн тулд и-мэйл заавал шаардлагатай.");
    if (!password)
      throw createHttpError(
        400,
        "Нэвтрэхийн тулд нууц үг заавал шаардлагатай."
      );

    

    res.status(200).json({ message: "Амжилттай нэвтэрлээ" });
  } catch (error) {
    next(error);
  }
};