import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchMovie } from "../../hooks/useCustomQuery"; 

export function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data: movies, refetch } = useSearchMovie(query);

  const handleSearch = async () => {
    if (!query) return; // Não faz nada se o campo estiver vazio
    await refetch(); // Executa a busca

    if (movies && movies.length > 0) {
      const movieId = movies[0].id; // Pega o ID do primeiro resultado
      navigate(`/movie/${movieId}`); // Redireciona para a página de detalhes
    } else {
      alert("Filme não encontrado.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center absolute top-10 sm:space-x-4 z-10  right-2 sm:right-24 bg-zinc-950 shadow-shape px-2 sm:px-3 py-2 rounded-2xl">
      <input
        type="text"
        className="w-40 sm:w-[200px] bg-transparent outline-none text-sm sm:text-base"
        placeholder="Buscar filme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress} // Aciona a busca ao pressionar Enter
      />
      <BiSearch
        className="size-5 hover:scale-125 transition duration-150 ease-in cursor-pointer"
        onClick={handleSearch} // Aciona a busca ao clicar no ícone
      />
    </div>
  );
}
