// import { useState } from "react";
import Folder from "../../../../components/folderWithName";
import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";

export default function Dashboard() {
  const games = ["Math Game"];
  const links = ["https://jogo-educativo.vercel.app/"];

  const { language } = useContext(AppContext);

  let ProjectDescription;
  if (language === "pt") {
    ProjectDescription = [
      "Um projeto desenvolvido para fins educacionais e para resolver problemas do mundo real de ajudar os alunos a praticar suas habilidades de cálculo.",
    ];
  } else {
    ProjectDescription = [
      "A project developed for educational purpose and to solve real world problem of helping students practice their calculation skills.",
    ];
  }

  return (
    <div className="blog-container">
      {games.map((game, index) => {
        return (
          <Folder
            name={game}
            description={ProjectDescription[index]}
            link={links[index]}
            key={index}
          />
        );
      })}
    </div>
  );
}
