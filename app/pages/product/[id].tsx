import { useRouter } from 'next/router';
import Image from 'next/image';

const productData = {
  1: {
    title: 'Product 1',
    description: 'This is an amazing product that you will love.',
    price: '$25.00',
    image: '/product1.jpg', // Image path
  },
  2: {
    title: 'Product 2',
    description: 'Experience the premium quality of this product.',
    price: '$30.00',
    image: '/product2.jpg',
  },
  3: {
    title: 'Product 3',
    description: 'Get the best value for your money with this product.',
    price: '$45.00',
    image: '/product3.jpg',
  },
};

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const product = productData[Number(id) as keyof typeof productData];

  if (!product) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p>Please check the URL or go back to the home page.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 flex flex-col items-center">
      {/* Using Next.js Image Component */}
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="rounded-lg shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">{product.title}</h1>
      <p className="text-gray-600 mt-4">{product.description}</p>
      <p className="text-xl font-semibold text-primary mt-2">{product.price}</p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
      >
        Go Back to Shop
      </a>
    </div>
  );
}
