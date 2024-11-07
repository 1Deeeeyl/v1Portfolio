// import React from 'react'
import "./Links.css";

function Links() {
  return (
    <ul className="mt-8">
      <li>
        <span className="inline-block point size-6"></span>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Opens résumé."
        >
          My Résumé
        </a>
      </li>
      <li>
        <a
          href="https://github.com/1Deeeeyl"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Opens GitHub on a new tab."
        >
          <span className="inline-block github size-6"></span>
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/Randale-Porciuncula"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Opens LinkedIn on a new tab."
        >
          <span className="inline-block linkedin size-6"></span>
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/Randale-Porciuncula"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Opens CodePen on a new tab."
        >
          <span className="inline-block codepen size-6"></span>
        </a>
      </li>
    </ul>
  );
}

export default Links;
