import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// https://github.com/nextauthjs/next-auth/issues/824
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma as PrismaClient;
}
export default prisma;
