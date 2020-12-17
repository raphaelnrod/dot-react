import React from "react";

import Article from "./Article";

const SectionSlider = (props) => {
  var articles = [];
  for (let i = 0; i < 3; i++) {
    articles.push(<Article></Article>);
  }

  return (
    <section className="section-one">
      <div className="container">
        <div className="article-wrapper">{articles}</div>
      </div>
    </section>
  );
};

export default SectionSlider;
