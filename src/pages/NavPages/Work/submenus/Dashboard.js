// import { useState } from "react";
import Folder from "../../../../components/folderWithName";
import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";

export default function Dashboard() {
  const dashboard = ["Test Dashboard"];
  const links = ["https://dashboard-ibg.vercel.app/"];

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

  return (
    <div className="blog-container">
      {dashboard.map((dash, index) => {
        return (
          <Folder
            name={dash}
            description={ProjectDescription[index]}
            link={links[index]}
            key={index}
          />
        );
      })}
    </div>
  );
}
