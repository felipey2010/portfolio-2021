import { useContext } from "react";
import Project from "../../../../components/Project";
import { AppContext } from "../../../../utils/AppContext";

export default function Blogs() {
  const blogs = ["Duffy", "Chirstmas Wishes", "Tech Blog"];
  const DemoLink = [
    "https://duffy-services.vercel.app/",
    "https://send-wishes.herokuapp.com/",
    "https://tech-blog-chi.vercel.app/",
  ];
  const { language } = useContext(AppContext);

  let ProjectDescription;
  if (language === "pt") {
    ProjectDescription = [
      "Duffy é um site de página única cujo objetivo é mostrar os serviços oferecidos por uma empresa",
      "Uma plataforma para publicar mensagens de Natal ao público. Desenvolvido em React JS e com MongoDB",
      "Um blog desenvolvido para publicar notícias relacionadas à tecnologia",
    ];
  } else {
    ProjectDescription = [
      "Duffy is a single page site purposed to show services offered by a company",
      "A platform to publish Christmas messages to the public. Developed in React JS and with MongoDB",
      "A blog developed to publish news related to technology",
    ];
  }
  const GithubLink = [
    "https://github.com/felipey2010/duffy-services.git",
    "https://github.com/felipey2010/send_wishes_frontend.git",
    "https://github.com/felipey2010/frontend_trabalho_final.git",
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
            key={index}
          />
        );
      })}
    </div>
  );
}
