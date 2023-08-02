import { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';

const Editor = () => {
  const [code, setCode] = useState('// Write your code here...');

  return (
    <div className="h-full w-full">
      <CodeMirror
        options={{
          lineNumbers: true,
          mode: 'javascript',
          theme: 'material',
        }}
        value={code}
        onChange={(editor, data, value) => {
          setCode(value);
        }}
      />
    </div>
  );
};

export default Editor;