// middleware/authMiddleware.ts (new file)
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// Extend the Request interface to add a user property
interface AuthenticatedRequest extends Request {
  user?: { id: string; email: string; role: string; }; // Adjust based on your JWT payload
}

export const protect = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN" -> ["Bearer", "TOKEN"]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; email: string; role: string; };

      // Attach user info from token to the request object
      req.user = decoded; // Now available in subsequent route handlers as req.user.id, req.user.role

      next(); // Pass control to the next middleware/route handler
    } catch (error) {
      console.error('Token verification error:', error);
      return res.status(401).json({ message: 'Not authorized, token failed.' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token.' });
  }
};

export const authorize = (requiredRoles: string[]) => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
      // req.user will be available here because 'protect' middleware ran before this
      if (!req.user) {
        return res.status(403).json({ message: 'Not authorized, user data not available.' }); // Should ideally not happen if protect runs first
      }
  
      // Check if the user's role is in the list of allowed roles
      if (!requiredRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Not authorized to access this route.' }); // 403 Forbidden
      }
  
      next(); // User has the required role, proceed to route handler
    };
  };