import { NextFunction, Request, Response } from "express";
import JsonWebToken from "../helpers/JwtGenerator/JsonWebToken";


export default (request: Request, response: Response, next: NextFunction) => {
  const { authorization: token } = request.headers;
  const tokenClass = new JsonWebToken();
  try {
    if(!token) throw new Error('Token not found.')
    const tokenInfo = tokenClass.decode(token);
    request.user = tokenInfo;
    return next();
  } catch(err: any) {
    return response.status(400).json({
      message: err.message || "Unexpected error."
    })
  }
};