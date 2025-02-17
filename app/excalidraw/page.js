// /app/etherpad/page.js

"use client";  // To enable client-side rendering for Next.js

import React from 'react';

const ExcalidrawPage = () => {
  return (
    <div>
      <h1>Etherpad Collaborative Editor</h1>
      <iframe
        src="https://excalidraw.com"
        width="100%"
        height="600px"
        frameBorder="0"
        title="Excalidraw Whiteboard"
      ></iframe>
    </div>
  );
};

export default ExcalidrawPage;
