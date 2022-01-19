// import { useState } from "react";
import Project from "../../../../components/Project";
import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";

export default function Dashboard() {
  const games = ["Math Game"];
  const DemoLink = ["https://jogo-educativo.vercel.app/"];

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

  const GithubLink = ["https://github.com/felipey2010/jogo-educativo.git"];

  const imgURL = ["img/math.jpg"];

  return (
    <div className="blog-container">
      {games.map((game, index) => {
        return (
          <Project
            name={game}
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
