import IToken from "../helpers/JwtGenerator/IToken";

declare global {
  namespace Express {
      interface Request{
          user: IToken
      }
  }
}