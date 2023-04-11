// import jwt from "jsonwebtoken"
// import { Request  , Response , NextFunction } from "express";

// const config = process.env;
// const key1 : string = config.TOKEN_SECRET_KEY || "";

// const auth = (req : Request, res : Response, next : NextFunction) => {
//   const token =
//     req.body.token || req.query.token || req.headers["x-access-token"];

//   console.log("Hi middleware");

//   if (!token) {
//     return res.status(403).json({
//       success: false,
//       message: "Хэрэглэгчийн token оруулах шаардлагатай.",
//     });
//   }
//   try {
//     const decoded = jwt.verify(token, key1 );
//     console.log(decoded);
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).json({
//       success: false,
//       message: "Хэрэглэгчийн token буруу, эсвэл идэвхигүй байна.",
//     });
//   }
//   return next();
// };

// export {auth}