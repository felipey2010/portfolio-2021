import Project from "../../../../components/Project";
import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";

export default function Dashboard() {
  const stores = ["Laptop Store"];
  const DemoLink = ["https://wolves-notebooks.netlify.app/"];

  const { language } = useContext(AppContext);

  let ProjectDescription;
  if (language === "pt") {
    ProjectDescription = [
      "Um projeto desenvolvido com colegas aplicando Scrum. O objetivo principal foi desenvolver um sistema informativo para quem deseja adquirir computadores.",
    ];
  } else {
    ProjectDescription = [
      "A project developed with colleagues applying Scrum. The main objective was to develop an informative system for those who want to purchase computers.",
    ];
  }

  const GithubLink = [
    "https://gitlab.com/grupo-b-proj-e-implementa-o-de-sistemas/sistema-web-notebook.git",
  ];

  return (
    <div className="blog-container">
      {stores.map((store, index) => {
        return (
          <Project
            name={store}
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
