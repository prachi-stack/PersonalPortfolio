import React from 'react';

const Image = () => {
  return (
    <div 
      style={{
        backgroundImage: "url('/assets/home1.png')", // Note the '/assets/home1.png'
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh' // Set a height if necessary for visibility
      }}
    >
      {/* Other content inside your div */}
    </div>
  );
}

export default Image;
