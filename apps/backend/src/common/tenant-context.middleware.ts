import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export interface TenantContext {
  tenantId: string;
  userId?: string;
  role?: string;
  plan?: string;
}

declare global {
  namespace Express {
    interface Request {
      tenantContext?: TenantContext;
    }
  }
}

@Injectable()
export class TenantContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const tenantId = (req.headers['x-tenant-id'] as string) || 'default-tenant';
    const userId = req.headers['x-user-id'] as string;
    const role = req.headers['x-user-role'] as string;
    const plan = req.headers['x-tenant-plan'] as string;

    req.tenantContext = {
      tenantId,
      userId,
      role,
      plan,
    };

    next();
  }
}
