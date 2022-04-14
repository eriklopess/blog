import jwt from "jsonwebtoken";
import IToken from "./IToken";
import "dotenv/config";
import IJwtGenerator from "./IJwtGenerator";

export default class JsonWebToken implements IJwtGenerator {
  private _secret: string;
  constructor() {
    this._secret = process.env.JWT_SECRET as string;
  }

  public get secret(): string {
    return this._secret;
  }

  public decode(token: string) {
      const tokenDecoded = this.verify(token);
      return tokenDecoded;
  }
  public verify(token: string): IToken {
    try {
      const verifyToken = jwt.verify(token, this.secret);
      return verifyToken as IToken;
    } catch(e: any) {
      throw new Error("Invalid token.");
    }
  }

  public generate(email: string): string {
    const token = jwt.sign({ email }, this.secret, {
      expiresIn: "30min",
    });
    return token;
  }
}
