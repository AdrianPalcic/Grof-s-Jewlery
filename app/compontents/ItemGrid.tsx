import React from "react";

const ItemGridPlaceholder = () => {
  const placeholders = Array.from({ length: 8 }).map((_, index) => ({
    id: index,
    name: `Placeholder Product ${index + 1}`,
    price: (10 + index).toFixed(2),
    image: "/kat1.png",
  }));

  return (
    <section id="item-grid" className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
        {placeholders.map((item) => (
          <div key={item.id}>
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full min-h-[250px] h-[300px] object-cover transition-opacity duration-300 hover:opacity-70"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
              <p className="mb-2">{"€" + item.price}</p>
              <button className="px-4 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition">
                Dodaj u košaricu
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemGridPlaceholder;
