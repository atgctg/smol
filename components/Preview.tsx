import { useEffect, useRef } from 'react';

const Preview: React.FC<{ code: string }> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className="p-2 h-full w-full flex flex-col">
      <div className="bg-gray-800 text-white text-lg font-semibold p-2">
        Output
      </div>
      <iframe
        ref={iframe}
        title="preview"
        sandbox="allow-scripts"
        srcDoc={html}
        className="flex-grow"
      />
    </div>
  );
};

const html = `
  <html>
  <body>
    <script>
      window.addEventListener('message', (event) => {
        try {
          eval(event.data);
        } catch (err) {
          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red;"><h4>Runtime Error:</h4>' + err + '</div>';
          console.error(err);
        }
      }, false);
    </script>
    <div id="root"></div>
  </body>
  </html>
`;

export default Preview;