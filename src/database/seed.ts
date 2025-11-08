import prisma from './index';

async function main() {
  console.log('Seeding database...');

  await prisma.user.create({
    data: {
      email: 'hello@budayago.local',
      name: 'Budayago Admin'
    }
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
