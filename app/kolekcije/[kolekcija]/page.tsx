import CollectionDetails from "./components/CollectionDetails";

const Page = async ({ params }: { params: { kolekcija: string } }) => {
  const slug = params.kolekcija; // ovo je slug iz URL-a

  return <CollectionDetails collection={slug} />;
};

export default Page;
