import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

//console.log(blogData);
/* function Header({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

function ArticleList() {
  const articleArray = [
    {
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
    },
  ];
  return (
    <main>
      <Article
        key={blogData.posts.id}
        title={articleArray.title}
        date={articleArray.date}
        preview={articleArray.preview}
      />
    </main>
  );
} */

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList /* key = {blogData.posts.id} */ posts={blogData.posts} />
    </div>
  );
}

export default App;
