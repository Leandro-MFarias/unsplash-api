import { Carousel } from "../../components/Carousel";
import { Genres } from "../../components/Genres";
import { Populares } from "../../components/Populares";
import { SearchBar } from "../../components/SearchBar";
import { TopRate } from "../../components/TopRate";

export function Home() {
  return (
    <main>
      <div className="z-10">
        <h1 className="text-zinc-50 text-3xl px-2 sm:px-8 py-10 ml-8 absolute z-10 font-bold">
          Cinevault
        </h1>
        <SearchBar />
      </div>

      <Carousel />

      <section className="my-6 space-y-10">
        <TopRate />
        <Populares />
        <Genres />
      </section>
    </main>
  );
}
