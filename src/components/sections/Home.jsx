import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const images = [
  {
    src: "/src/assets/show.png",
    alt: "Charizard card",
    className: "brightness-150",
  },
  {
    src: "/src/assets/clw64kdbg000i357966gti140.png",
    alt: "Lucario card",
    className: "brightness-150",
  },
  {
    src: "/src/assets/SV07_EN_32-2x.png",
    alt: "Lapras card",
    className: "brightness-125",
  },
];

const Home = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".container",
      { x: -50 },
      { x: 50, duration: 1 },
      { scope: container }
    );
  });

  return (
    <main
      className="container flex flex-row justify-between items-center text-white w-5/6 h-screen hero"
      ref={container}
    >
      <div className="w-1/3 relative left-24 p-8">
        <h1 className="pb-12 text-6xl">
          Discover, Check Market Prices, and Trade: Your Ultimate Pokémon Card
          Hub
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          vero laborum neque, possimus dignissimos aliquam?
        </p>
        <button type="button" className="mt-4 px-4 py-2 bg-blue-500 rounded-lg">
          Click me
        </button>
      </div>

      <div className="img-container w-1/3 h-1/2 m-4 flex gap-4 justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`rounded-lg shadow-lg shadow-black hover image-hero ${image.className}`}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
