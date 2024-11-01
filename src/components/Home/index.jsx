import { Carousel } from "../Carousel";
import { Details } from "../Details";
import { Genres } from "../Genres";
import { Populares } from "../Populares";
import { TopRate } from "../TopRate";

export function Home() {
  return (
    <main>
      <h1 className="text-zinc-50 text-3xl px-2 sm:px-8 py-10 ml-6 absolute z-10 font-bold">
        Cinevault
      </h1>
      
      <Carousel />

      <div className="my-6 space-y-10">
        <TopRate />
        <Populares />
        <Genres />
      </div>
      <Details />
    </main>
  );
}
