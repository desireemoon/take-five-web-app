import { Request, Response, NextFunction } from 'express';

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  // Assuming the user's role is included in the JWT payload and added to the req.user object by the authentication middleware
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Not authorized.' });
  }
  next();
};
