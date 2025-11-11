import React from 'react';
import './SajWrap.css';

const SajWrap = () => {
  return (
    <div className="sajwrap-page">
      <h1>Saj Wrap</h1>

      <div className="sajwrap-embed">
        <iframe
          title="Saj Wrap - Canva"
          loading="lazy"
          src="https://www.canva.com/design/DAGyif3wWqI/9VgSYi5TmDnjSHyUT0b1aw/view?embed"
          allowFullScreen
          allow="fullscreen"
        />
      </div>

      <p className="sajwrap-credit">
        <a
          href="https://www.canva.com/design/DAGyif3wWqI/9VgSYi5TmDnjSHyUT0b1aw/view?utm_content=DAGyif3wWqI&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Delicious, handcrafted pizza with a style all its own — bold, fresh, and unmistakably unique."
        </a>
      </p>
    </div>
  );
};

export default SajWrap;