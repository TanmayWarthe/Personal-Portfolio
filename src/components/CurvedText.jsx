import React from 'react';

function CurvedText({ text, radius = 100 }) {
  const characters = text.split('');
  const length = characters.length;
  
  const getDegree = (i) => {
    const multiplier = (360 / radius) * -1.3;
    const indexPlacing = (i * 2) - length;
    const degree = indexPlacing * multiplier;
    return degree;
  };

  return (
    <div 
      style={{ 
        position: 'relative',
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {characters.map((char, i) => (
        <div
          key={`curved-text-${i}-${text}`}
          style={{
            height: `${radius}px`,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            transform: `rotate(${getDegree(i)}deg)`,
            transformOrigin: `center bottom`,
            position: 'absolute',
            fontSize: '14px',
            fontWeight: 600,
            color: 'inherit',
            left: '50%',
            bottom: '50%',
            marginLeft: '-3px',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </div>
      ))}
    </div>
  );
}

export default CurvedText;
