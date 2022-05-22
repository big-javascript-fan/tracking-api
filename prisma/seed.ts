import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
