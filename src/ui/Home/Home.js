//import React from "react";
import React, { useState } from "react";

import "./Home.css";

const comics = [
  {
    id: 45977,
    title: "Captain America (2012) #11",
    characters: ["Captain America"],
  },
  {
    id: 43722,
    title: "Captain America (2012) #1",
    characters: ["Captain America"],
  },
  {
    id: 40391,
    title: "Captain America (2011) #18",
    characters: ["Captain America"],
  },
  {
    id: 43339,
    title: "Uncanny Avengers (2012) #1",
    characters: [
      "Captain America",
      "Havok",
      "Rogue",
      "Scarlet Witch",
      "Thor",
      "Wolverine",
    ],
  },
];

export const Home = () => {
  const [filter, setFilter] = useState("");
  const filteredTitles = comics.filter((comics) =>
    comics.title.toLowerCase().includes(filter.toLowerCase)
  );

  return (
    <main className="container">
      <header>
        <h1 className="title">Buscador de cómics de Marvel</h1>
        <h2 className="subtitle">
          Este buscador encontrará los cómics en los que aparezcan los dos
          personajes que selecciones en el formulario
        </h2>
      </header>
      <section>
        <p className="inputLabel">Escribe un personaje en la lista</p>
        <div className="inputContainer">
          <input
            className="filterInput"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
          <button
            className="clearButton"
            type="button"
            onClick={() => setFilter("")}
          >
            Limpiar búsqueda
          </button>
        </div>
        {filteredTitles.map((comics) => (
          <div key={comics.id} className="comicCard">
            <p className="comicTitle">{comics.title}</p>
            <p>{comics.characters.join(", ")}</p>
          </div>
        ))}
      </section>
    </main>
  );
};
