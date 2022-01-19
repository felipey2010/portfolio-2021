// import { useState } from "react";
import Project from "../../../../components/Project";
import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";

export default function Dashboard() {
  const dashboard = ["Test Dashboard"];
  const DemoLink = ["https://dashboard-ibg.vercel.app/"];

  const { language } = useContext(AppContext);

  let ProjectDescription;
  if (language === "pt") {
    ProjectDescription = [
      "Um painel desenvolvido no processo de aprendizagem com o Material UI. Inclui um sistema de autenticação que foi o grande desafio neste projeto",
    ];
  } else {
    ProjectDescription = [
      "A dashboard developed in the process of learning with Material UI. It includes an authentication system which was the major challenge in this project",
    ];
  }

  const GithubLink = ["https://github.com/felipey2010/frontend_ibg.git"];

  const imgURL = ["img/dashboard.jpg"];

  return (
    <div className="blog-container">
      {dashboard.map((dash, index) => {
        return (
          <Project
            name={dash}
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
