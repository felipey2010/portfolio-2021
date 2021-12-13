// import { useState } from "react";
import Folder from "../../../../components/folderWithName";

export default function Others() {
  const others = [
    "Random Quote",
    "GOT Web App",
    "Google Clone",
    "Dashboard API",
  ];

  return (
    <div className="blog-container">
      {others.map((other, index) => {
        return <Folder name={other} key={index} />;
      })}
    </div>
  );
}
