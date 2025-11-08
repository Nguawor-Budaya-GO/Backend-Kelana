import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';

// Ensure environment variables are loaded when the Prisma client is created.
const envPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envPath });

const prisma = new PrismaClient();

export default prisma;
