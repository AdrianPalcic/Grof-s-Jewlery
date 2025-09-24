import { Image } from "@/types/types";

type HeroProps = {
  name: string;
  image: Image | string;
};

export async function Hero({ name, image }: HeroProps) {
  const imageUrl = typeof image === "string" ? image : image.url;
  const altText = typeof image === "string" ? name : image.altText || name;

  return (
    <section className="relative h-[60vh] w-full mb-20">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">{name}</h1>
        <h2 className="text-xl sm:text-2xl">Umjetnost koju nosite sa sobom.</h2>
      </div>
    </section>
  );
}
