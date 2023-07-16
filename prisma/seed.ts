import { PrismaService } from './../src/prisma/prisma.service';
import products from './products';

const prisma = new PrismaService();

(function seed() {
  products.forEach(async (p) => {
    await prisma.product.create({
      data: {
        name: p.name,
        description: p.description,
        price: p.price,
        image: p.image,
        brand: p.brand,
      },
    });
  });
})();
