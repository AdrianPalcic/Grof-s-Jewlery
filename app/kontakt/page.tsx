import React from "react";
import Hero from "./components/Hero";
import Form from "./components/Form";
import SpecialFrom from "./components/SpecialFrom";

const page = () => {
  return (
    <div className="sm:px-10 px-4">
      <Hero />
      <section id="kontakt-forma" className="mb-20">
        <div className="flex gap-5 md:flex-row flex-col">
          <Form />
          <SpecialFrom />
        </div>
      </section>
    </div>
  );
};

export default page;
