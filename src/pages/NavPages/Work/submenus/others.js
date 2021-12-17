// import { useState } from "react";
import Folder from "../../../../components/folderWithName";
import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";

export default function Others() {
  const others = [
    "Random Quote",
    "GOT Web App",
    "Google Clone",
    "Dashboard API",
  ];
  const links = [
    "https://random-quote-web-app.vercel.app/",
    "https://game-of-thrones-web-app.vercel.app/",
    "https://google-cloned-app.vercel.app/",
    "https://github.com/felipey2010/backend_trabalho_final.git",
  ];

  const { language } = useContext(AppContext);

  let ProjectDescription;
  if (language === "pt") {
    ProjectDescription = [
      "Este site mostra citações aleatórias de pessoas famosas. Ele faz uso de uma API de cotação",
      "Informe qualquer nome de personagens em Game of Thrones e obtenha detalhes da casa a que pertencem e outros detalhes",
      "Uma tentativa próxima de criar um clone do mecanismo de pesquisa do Google usando React JS.",
      "O back-end do painel criado usando NodeJS e MongoDB",
    ];
  } else {
    ProjectDescription = [
      "This site shows random quotes from famous people. It makes use of a quote API",
      "Inform any name of characters in Game of Thrones and get details of the house they belong in and other details",
      "A close attempt to create a clone of the Google search engine using React JS.",
      "The backend of the dashboard created using NodeJS and MongoDB",
    ];
  }

  return (
    <div className="blog-container">
      {others.map((other, index) => {
        return (
          <Folder
            name={other}
            description={ProjectDescription[index]}
            link={links[index]}
            key={index}
          />
        );
      })}
    </div>
  );
}
