import CollectionDetails from "./components/CollectionDetails";

const Page = async ({ params }: { params: { kolekcija: string } }) => {
  const slug = params.kolekcija; 

  return <CollectionDetails collection={slug} />;
};

export default Page;
