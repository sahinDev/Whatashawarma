import React from 'react';

const Pizza = () => {
  return (
    <div className="pizza-page" style={{ padding: 24, maxWidth: 1100, margin: '0 auto' }}>
      <h1>Pizza Menu</h1>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '77.2727%',
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform'
        }}
      >
        <iframe
          title="Pizza Menu - Canva"
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
          src="https://www.canva.com/design/DAGyif3wWqI/9VgSYi5TmDnjSHyUT0b1aw/view?embed"
          allowFullScreen
          allow="fullscreen"
        />
      </div>

      <p style={{ color: '#666', marginTop: 12 }}>
        <a
          href="https://www.canva.com/design/DAGyif3wWqI/9VgSYi5TmDnjSHyUT0b1aw/view?utm_content=DAGyif3wWqI&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Delicious, handcrafted pizza with a style all its own — bold, fresh, and unmistakably unique."
        </a>{' '}
      </p>
    </div>
  );
};

export default Pizza;