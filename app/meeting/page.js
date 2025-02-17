'use client'; // Ensures this is client-side code

import { useEffect, useState } from 'react';

const JitsiMeeting = () => {
  const [api, setApi] = useState(null); // Store the Jitsi API instance

  useEffect(() => {
    // Dynamically load the Jitsi API script only once when the component mounts
    const script = document.createElement('script');
    script.src = 'https://8x8.vc/vpaas-magic-cookie-54455e2356064a2fac59a2ce0188e243/external_api.js';
    script.async = true;
    script.onload = () => {
      // Initialize Jitsi meeting after the script loads
      const apiInstance = new window.JitsiMeetExternalAPI("8x8.vc", {
        roomName: "vpaas-magic-cookie-54455e2356064a2fac59a2ce0188e243/SampleAppUniqueClassificationsFeedMostly",
        parentNode: document.querySelector('#jaas-container'),
        userInfo: {
          displayName: 'User', // You can change the display name here
        },
        configOverwrite: {
          startWithAudioMuted: true,  // Mute audio by default
          startWithVideoMuted: true,  // Mute video by default
        },
      });

      setApi(apiInstance); // Store the API instance for further control (e.g., to toggle audio/video)
    };

    document.body.appendChild(script);

    // Cleanup function: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
      if (api) {
        api.dispose(); // Clean up the Jitsi API instance when the component unmounts
      }
    };
  }, []); // The empty dependency array ensures this runs only once on mount

  // Function to toggle audio
  const toggleAudio = () => {
    if (api) {
      api.executeCommand('toggleAudio');
    }
  };

  // Function to toggle video
  const toggleVideo = () => {
    if (api) {
      api.executeCommand('toggleVideo');
    }
  };

  return (
    <div className="relative h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-8 text-center">Welcome to the Jitsi Meeting</h1>
      <p className="flex justify-center text-center">Refresh it once</p>
      <div id="jaas-container" className="w-full h-full rounded-lg shadow-lg" />

      {/* Audio and Video control buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 space-x-4">
        <button
          onClick={toggleAudio}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-colors"
        >
          Toggle Audio
        </button>
        <button
          onClick={toggleVideo}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-colors"
        >
          Toggle Video
        </button>
      </div>
    </div>
  );
};

export default JitsiMeeting;
