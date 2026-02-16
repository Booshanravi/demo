const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const profile = await prisma.profile.create({
    data: {
      name: "Booshan Ravi",
      bio: "Full Stack Developer",
      profilePic: "https://via.placeholder.com/150",
      skills: ["React", "Node.js", "PostgreSQL"]
    }
  });

  console.log("Profile Created:", profile);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
