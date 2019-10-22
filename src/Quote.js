// src/Quote.js
import React from "react";

const Quote = ({image, quote, character}) => (
  <figure>
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);
export default Quote;