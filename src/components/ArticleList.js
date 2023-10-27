import React from "react";
import Article from "./Article";

function ArticleList() {
  return (
    <main>
      <Article
        title="The WET Codebase"
        date="July 13,2020."
        preview="Come waste your time with me."
      />
      <Article
        title="Goodbye, Clean Code"
        date="JAnuary11,2020."
        preview="Let clean coe guide you.Then let it go."
      />
      <Article
        title="My Decade in review"
        date="January 1,2020."
        preview="A personal reflection."
      />
    </main>
  );
}

export default ArticleList;
