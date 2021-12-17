import Folder from "../../../../components/folderWithName";
import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";

export default function Dashboard() {
  const stores = ["Laptop Store"];
  const links = ["https://wolves-notebooks.netlify.app/"];

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

  return (
    <div className="blog-container">
      {stores.map((store, index) => {
        return (
          <Folder
            name={store}
            description={ProjectDescription[index]}
            link={links[index]}
            key={index}
          />
        );
      })}
    </div>
  );
}
