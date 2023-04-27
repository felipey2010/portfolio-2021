// import { useState } from "react";
import Project from "../../../../components/Project"
import { useContext } from "react"
import { AppContext } from "../../../../utils/AppContext"

export default function Others() {
  const others = [
    "Random Quote",
    "Contact App",
    "GOT Web App",
    "Google Clone",
    "Dashboard API",
  ]
  const DemoLink = [
    "https://random-quote-web-app.vercel.app/",
    "https://contact-list-webapp.vercel.app/",
    "https://game-of-thrones-web-app.vercel.app/",
    "https://g-cloned-app.vercel.app",
    "https://github.com/felipey2010/backend_trabalho_final.git",
  ]

  const { language } = useContext(AppContext)

  let ProjectDescription
  if (language === "pt") {
    ProjectDescription = [
      "Este site mostra citações aleatórias de pessoas famosas. Ele faz uso de uma API de cotação",
      "O aplicativo de contato usa react hooks, contexto e bibliotecas, como react spinners e notistack. O backend foi desenvolvido em NodeJS com banco de dados MongoDB",
      "Informe qualquer nome de personagens em Game of Thrones e obtenha detalhes da casa a que pertencem e outros detalhes",
      "Uma tentativa próxima de criar um clone do mecanismo de pesquisa do Google usando React JS.",
      "O back-end do painel criado usando NodeJS e MongoDB",
    ]
  } else {
    ProjectDescription = [
      "This site shows random quotes from famous people. It makes use of a quote API",
      "The contact app uses react hooks, context and libraries such as react spinners and notistack. The backend was developed in NodeJS with MongoDB database",
      "Inform any name of characters in Game of Thrones and get details of the house they belong in and other details",
      "A close attempt to create a clone of the Google search engine using React JS.",
      "The backend of the dashboard created using NodeJS and MongoDB",
    ]
  }

  const GithubLink = [
    "https://github.com/felipey2010/random_quote_web_app.git",
    "https://github.com/felipey2010/contact-list-app.git",
    "https://github.com/felipey2010/game_of_thrones_web_app.git",
    "https://github.com/felipey2010/google-clone.git",
    "",
  ]

  const imgURL = [
    "img/quotes.jpg",
    "img/contact.jpg",
    "img/got.jpg",
    "img/google.jpg",
    "img/dashboard.jpg",
  ]

  return (
    <div className="blog-container">
      {others.map((other, index) => {
        return (
          <Project
            name={other}
            description={ProjectDescription[index]}
            demo={DemoLink[index]}
            gitURL={GithubLink[index]}
            imgURL={imgURL[index]}
            key={index}
          />
        )
      })}
    </div>
  )
}
