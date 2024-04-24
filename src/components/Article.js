function Article({ title, date = "January 1, 1970", preview }) {
  console.log(title);
  console.log(date);
  console.log(preview);

/*    const posts = title.map((post) => {
    return post.title;
  });

  const days = date.map((day) => {
    return day.date;
  }); 

   const highlights = preview.map((highlight) => {
    return highlight.preview;
  }); */  

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {/*    {title.map((post) => (
        <h3>{post.title}</h3>
      ))}
      {date.map((day) => (
        <small>{day.date}</small>
      ))}
      {preview.map((highlight) => (
        <p>{highlight.preview}</p>
      ))} */}
    </article>
  );
}
export default Article;
