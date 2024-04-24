import Article from "./Article";

function ArticleList({ posts }) {
  const articleArray = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ];

  return (
    <main>
      
      <Article
        key={posts.id}
        title={articleArray[0].title}
        date={articleArray[0].date}
        preview={articleArray[0].preview}
      />
      <Article
        key={posts.id}
        title={articleArray[1].title}
        date={articleArray[1].date}
        preview={articleArray[1].preview}
      />
      <Article
        key={posts.id}
        title={articleArray[2].title}
        date={articleArray[2].date}
        preview={articleArray[2].preview}
      />
    </main>
  );
}

export default ArticleList;
