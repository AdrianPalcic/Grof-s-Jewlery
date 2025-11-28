import ButtonMain from "./compontents/ButtonMain";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify center py-20 px-4 sm:px-10">
      <h2 className="font-bold text-secondaryColor text-9xl text-center">
        404
      </h2>
      <p className="pb-5 text-center">
        Ova stranica nije pronađena ili je izbrisana
      </p>
      <ButtonMain text="Povratak na Naslovnu" />
    </div>
  );
}
