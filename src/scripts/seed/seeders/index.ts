import { seedAdmin } from "./admin";
import { seedHome } from "./home";

async function main() {
  try {
    await seedAdmin();
    await seedHome();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

void main();
