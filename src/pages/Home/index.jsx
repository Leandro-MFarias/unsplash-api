import { Carousel } from "../../components/Carousel";
import { Genres } from "../../components/Genres";
import { Populares } from "../../components/Populares";
import { TopRate } from "../../components/TopRate";

export function Home() {
  return (
    <main>
      <h1 className="text-zinc-50 text-3xl px-2 sm:px-8 py-10 ml-6 absolute z-10 font-bold">
        Cinevault
      </h1>
      
      <Carousel />

      <section className="my-6 space-y-10">
        <TopRate />
        <Populares />
        <Genres />
      </section>
    </main>
  );
}
