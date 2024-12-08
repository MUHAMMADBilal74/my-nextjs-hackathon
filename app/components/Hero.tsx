// Inside your Hero Section Component (e.g. `/components/Hero.tsx`)

export default function Hero() {
  return (
    <section className="relative bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Welcome to ALLAH RAAZI
        </h1>
        <p className="text-lg mt-4">
          Explore the best deals and products just for you.
        </p>
        <a
          href="#shop-now"
          className="mt-6 inline-block px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
