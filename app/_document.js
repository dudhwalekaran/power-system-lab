// _document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Jitsi External API Script */}
          <script
            src="https://8x8.vc/vpaas-magic-cookie-d6cd25815c5b4585afb818b28d86b07b/external_api.js"
            async
            onLoad={() => {
              console.log('Jitsi Meet API script loaded');
              window.JitsiMeetExternalAPILoaded = true; // Set a flag to indicate the script is loaded
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
