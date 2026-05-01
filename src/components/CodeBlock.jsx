import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-wrapper">
      <button 
        className="copy-btn" 
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <>
            <Check size={14} /> Copied!
          </>
        ) : (
          <>
            <Copy size={14} /> Copy
          </>
        )}
      </button>
      <pre>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
