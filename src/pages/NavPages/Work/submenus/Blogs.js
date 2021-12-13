// import { useState } from "react";
import Folder from "../../../../components/folderWithName";

export default function Blogs() {
  const blogs = ["Chirstmas Wishes", "Tech Blog"];

  return (
    <div className="blog-container">
      {blogs.map((blog, index) => {
        return <Folder name={blog} key={index} />;
      })}
    </div>
  );
}
