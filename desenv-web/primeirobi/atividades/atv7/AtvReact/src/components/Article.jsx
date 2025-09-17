import React from 'react';

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <div>
        {props.content}
      </div>
    </article>
  );
}

export default Article;