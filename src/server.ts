import app from './app';
import { PrismaClient } from '@prisma/client';
import swaggerDocs from './swagger';

const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');

    const server = app.listen(PORT, () => {
      swaggerDocs(app);
    });
  } catch (error) {
    console.error('Database connection error', error);
    process.exit(1);
  }
}

main();

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});