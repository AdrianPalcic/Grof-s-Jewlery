import React from "react";

const AboutCollection = ({ description }: { description: string }) => {
  return (
    <section
      id="about-collection"
      className="w-full flex flex-col items-center justify-center mb-20"
    >
      <h2 className="text-3xl text-center">Priča o kolekciji </h2>
      <p className="text-center w-full md:w-[50%] mt-2">{description}</p>
    </section>
  );
};

export default AboutCollection;
