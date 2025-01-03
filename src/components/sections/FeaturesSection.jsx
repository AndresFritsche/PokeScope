const features = [
  {
    id: 1,
    title: "Fast Performance",
    description: "Experience blazing fast speeds with optimized performance.",
    icon: "⚡", // Example emoji icon
  },
  {
    id: 2,
    title: "Secure and Reliable",
    description: "Your data is protected with the latest security standards.",
    icon: "🔒",
  },
  {
    id: 3,
    title: "User-Friendly Design",
    description: "Simple, intuitive interfaces designed for everyone.",
    icon: "💡",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "We’re here to help anytime, anywhere.",
    icon: "📞",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen w-screen sm:py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/src/assets/pokemon-anime-screenshot-with-pi.webp')] bg-cover bg-center opacity-30 blur-sm"></div>

      {/* Heading */}
      <div className="relative w-full flex justify-center">
        <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-bold tracking-wide drop-shadow-lg">
          Features
        </h1>
      </div>

      {/* Content */}
      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 mt-12 px-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg"
          >
            <div className="h-full py-10 px-8">
              <div className="w-16 h-16 text-indigo-500 flex items-center justify-center text-5xl">
                {feature.icon}
              </div>
              <h3 className="mt-8 text-2xl lg:text-3xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm lg:text-base text-gray-300">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
