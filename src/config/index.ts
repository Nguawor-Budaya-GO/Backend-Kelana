import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envPath });

export const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
export const DATABASE_URL = process.env.DATABASE_URL || 'file:./dev.db';
