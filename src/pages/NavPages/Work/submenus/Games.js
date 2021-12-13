// import { useState } from "react";
import Folder from "../../../../components/folderWithName";

export default function Dashboard() {
  const games = ["Math Game"];

  return (
    <div className="blog-container">
      {games.map((game, index) => {
        return <Folder name={game} key={index} />;
      })}
    </div>
  );
}
