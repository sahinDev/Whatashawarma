import React from 'react';
import PizzaGif from '../../assets/PizzaGiff.gif';
const Pizza = () => {
  return (
    <div className="pizza-page" style={{ padding: 24, maxWidth: 1900, margin: '0 auto' }}>
      

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '62%',
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform'
        }}
      >
        <img
          title="Pizza Menu - Canva"
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, objectFit:"cover",  margin: 0 }}
          src={PizzaGif}
          
          allowFullScreen
          allow="fullscreen"
        />
      </div>

      {/* <p style={{ color: '#666', marginTop: 12 }}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          "Delicious, handcrafted pizza with a style all its own — bold, fresh, and unmistakably unique."
        </a>{' '}
      </p> */}
    </div>
  );
};

export default Pizza;