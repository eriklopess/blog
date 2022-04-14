import { NextFunction, Response } from 'express';
import { Request } from 'express';
import { Schema } from 'joi';

export default (schema: Schema) => (request: Request, response: Response, next: NextFunction) => {
  const { error } = schema.validate(request.body);
  if (error) {
    const [code, message] = error.message.split('|');
    return response.status(Number(code)).json({ message });
  }
  next();
};