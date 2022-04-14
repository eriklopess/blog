import IToken from "./IToken";

export default interface IJwtGenerator {
  secret: string;
  generate(email: string): string;
  decode(token: string): IToken;
  verify(token: string): IToken | Error;
}