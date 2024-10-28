import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import duna from "../duna.png";

export function App() {

  async function axios() {
    const key = "16a0e103ded9a57b467984107a8dff79";
    const url = `https://api.themoviedb.org/3/movie/changes?page=1&api_key=${key}`;
    
    const response = await axios.get(url)
    const data = await response.results
    console.log(data);

  }


  return (
    <div className="mb-3 ">
      <h1 className="text-zinc-50 text-3xl px-8 py-10 ml-6 absolute z-10 font-bold">
        Cinevault
      </h1>

      <section className="w-full flex flex-col items-center px-4 space-y-2">
        <div className="h-full w-full flex items-center justify-between m-0">
          <IoIosArrowBack className="text-slate-200/50 size-7 hover:text-zinc-50 hover:scale-125 transition-colors duration-75 ease-linear cursor-pointer absolute ml-3 z-10" />

          <div className="relative w-screen flex">
            <div className="w-full">
              <img src={duna} className="h-[840px] w-full m-auto" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
            </div>

            <div className="hidden">
              <img src={duna} className="h-[840px] w-full m-auto" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
            </div>

            <div className="hidden">
              <img src={duna} className="h-[840px] w-full m-auto" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
            </div>

            <div className="hidden">
              <img src={duna} className="h-[840px] w-full m-auto" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
            </div>

            <div className="hidden">
              <img src={duna} className="h-[840px] w-full m-auto" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
            </div>
          </div>

          <IoIosArrowForward className="text-slate-200/50 size-7 hover:text-zinc-50 hover:scale-125 transition-colors duration-75 ease-linear cursor-pointer absolute right-4 z-10" />
        </div>
        <div className="space-x-3">
          <button className="bg-slate-100 w-2 h-2 rounded-full"></button>
          <button className="bg-slate-600 w-2 h-2 rounded-full"></button>
          <button className="bg-slate-600 w-2 h-2 rounded-full"></button>
          <button className="bg-slate-600 w-2 h-2 rounded-full"></button>
          <button className="bg-slate-600 w-2 h-2 rounded-full"></button>
        </div>
      </section>

      <div className="space-y-10">
        <section className="ml-14 space-y-4">
          <h2 className="text-xl font-semibold">Destaques</h2>

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
