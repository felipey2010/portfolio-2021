import { useContext } from "react";
import Project from "../../../../components/Project";
import { AppContext } from "../../../../utils/AppContext";

export default function Blogs() {
  const blogs = ["Duffy", "Send Wishes", "Tech Blog", "FotoGram", "Countdown"];
  const DemoLink = [
    "https://duffy-services.vercel.app/",
    "https://send-wishes.herokuapp.com/",
    "https://tech-blog-chi.vercel.app/",
    "https://fotogram-app.vercel.app/",
    "https://countdown-web-app.vercel.app/",
  ];
  const { language } = useContext(AppContext);

  let ProjectDescription;
  if (language === "pt") {
    ProjectDescription = [
      "Duffy é um site de página única cujo objetivo é mostrar os serviços oferecidos por uma empresa",
      "Uma plataforma para publicar mensagens de Natal ao público. Desenvolvido em React JS e com MongoDB",
      "Um blog desenvolvido para publicar notícias relacionadas à tecnologia",
      "O Fotogram foi desenvolvido para fazer upload de imagens utilizando os serviços de nuvem do Firebase e a biblioteca Framer Motion.",
      "Este é um modelo de site de página única que mostra uma contagem regressiva. Este projeto pode ser adicionado a um maior onde há a necessidade de uma página de contagem regressiva.",
    ];
  } else {
    ProjectDescription = [
      "Duffy is a single page site purposed to show services offered by a company",
      "A platform to publish Christmas messages to the public. Developed in React JS and with MongoDB",
      "A blog developed to publish news related to technology",
      "The Fotogram was developed to upload images using Firebase cloud services and Framer Motion library.",
      "This is a single-page website template that shows a countdown. This project could be added to a bigger one where there is a necessity for a countdown page.",
    ];
  }
  const GithubLink = [
    "https://github.com/felipey2010/duffy-services.git",
    "https://github.com/felipey2010/send_wishes_frontend.git",
    "https://github.com/felipey2010/frontend_trabalho_final.git",
    "https://github.com/felipey2010/fotogram.git",
    "https://github.com/felipey2010/countdown-web-app.git",
  ];

  const imgURL = [
    "img/duffy.jpg",
    "img/wishes.jpg",
    "img/tech.jpg",
    "img/fotogram.jpg",
    "img/countdown.jpg",
  ];

  return (
    <div className="blog-container">
      {blogs.map((blog, index) => {
        return (
          <Project
            name={blog}
            description={ProjectDescription[index]}
            demo={DemoLink[index]}
            gitURL={GithubLink[index]}
            imgURL={imgURL[index]}
            key={index}
          />
        );
      })}
    </div>
  );
}
