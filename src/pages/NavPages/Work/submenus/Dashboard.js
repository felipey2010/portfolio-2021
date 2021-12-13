// import { useState } from "react";
import Folder from "../../../../components/folderWithName";

export default function Dashboard() {
  const dashboard = ["Test Dashboard"];

  return (
    <div className="blog-container">
      {dashboard.map((dash, index) => {
        return <Folder name={dash} key={index} />;
      })}
    </div>
  );
}
