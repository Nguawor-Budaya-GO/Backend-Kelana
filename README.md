# Budayago Backend (Node + TypeScript + Prisma)

Minimal starter with Express, TypeScript and Prisma (SQLite). Structure follows the layout you requested.

Quick start

1. Copy `.env.example` to `.env` and adjust if needed.

2. Install dependencies:

   ```fish
   cd /home/djamgt/Documents/Kerjaan/budayago/Backend
   npm install
   ```

3. Generate Prisma client:

   ```fish
   npx prisma generate
   ```

4. Run migrations (optional) and seed (SQLite will create file automatically):

   ```fish
   npx prisma migrate dev --name init
   npm run seed
   ```

5. Start development server:

   ```fish
   npm run dev
   ```

Open http://localhost:3000/api/v1/health
