import { Carousel } from "../Carousel";
import { Populares } from "../Populares";

export function Home() {
  return (
    <div className="mb-3 ">
      <h1 className="text-zinc-50 text-3xl px-8 py-10 ml-6 absolute z-10 font-bold">
        Cinevault
      </h1>

      <Carousel />

      <div className="mt-5 space-y-10">
        <Populares />

        <section className="ml-14 space-y-4">
          <h2 className="text-xl font-semibold">Filmes</h2>

          <div className="flex space-x-6 overflow-hidden">
            <div className="cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border hover:border-gray-200 ">
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
