// import { useState } from "react";
import Folder from "../../../../components/folderWithName";

export default function Dashboard() {
  const stores = ["Laptop Store"];

  return (
    <div className="blog-container">
      {stores.map((store, index) => {
        return <Folder name={store} key={index} />;
      })}
    </div>
  );
}
