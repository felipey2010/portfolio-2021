import { useContext } from "react";
import Folder from "../../../../components/folderWithName";
import { AppContext } from "../../../../utils/AppContext";

export default function Blogs() {
  const blogs = ["Duffy", "Chirstmas Wishes", "Tech Blog"];
  const links = [
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

  return (
    <div className="blog-container">
      {blogs.map((blog, index) => {
        return (
          <Folder
            name={blog}
            description={ProjectDescription[index]}
            link={links[index]}
            key={index}
          />
        );
      })}
    </div>
  );
}
