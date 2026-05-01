import React from 'react';
import CodeBlock from '../components/CodeBlock';
import { Download, Terminal, Monitor, PlayCircle, CheckCircle2, AlertCircle } from 'lucide-react';

const Installation = () => {
  return (
    <div className="page-content animation-fade-in">
      <div className="page-header">
        <h1 className="page-title">🚀 Installation & Setup</h1>
        <div className="page-badge">Environment Config • React 18+</div>
      </div>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
        Setting up React requires a JavaScript runtime environment. Follow these steps to prepare 
        your local machine for modern web development.
      </p>

      {/* Prerequisites Section */}
      <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', borderRadius: '8px', marginBottom: '2.5rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0 }}>
          <AlertCircle size={20} color="#3b82f6" /> Prerequisite: Node.js
        </h3>
        <p>Before installing React, you <strong>must</strong> have Node.js and npm (Node Package Manager) installed.</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '10px' }}>
          <a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            Download Node.js <Download size={16} />
          </a>
          <a href="https://www.digitalocean.com/community/tutorials/node-js-environment-setup-node-js-installation" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            Read Guide <Terminal size={16} />
          </a>
        </div>
      </div>

      {/* OS Specific Instructions */}
      <h2 style={{ marginBottom: '1.5rem' }}><Monitor size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Step-by-Step Setup by OS</h2>
      
      <div className="os-grid" style={{ display: 'grid', gap: '2rem' }}>
        
        {/* Windows */}
        <section>
          <h3>1. Windows Setup</h3>
          <ul className="step-list">
            <li><strong>Download Installer:</strong> Go to the official Node.js website and download the <strong>LTS</strong> version (recommended for stability).</li>
            <li><strong>Run Setup:</strong> Follow the installation wizard. Ensure the "Add to PATH" option is checked.</li>
            <li><strong>Verify:</strong> Open Command Prompt (CMD) or PowerShell and type:</li>
          </ul>
          <CodeBlock code={`node -v\nnpm -v`} />
        </section>

        {/* MacOS */}
        <section>
          <h3>2. macOS Setup</h3>
          <ul className="step-list">
            <li><strong>Option A (Installer):</strong> Download the <code>.pkg</code> file from Node.js website.</li>
            <li><strong>Option B (Homebrew):</strong> Open Terminal and run:</li>
          </ul>
          <CodeBlock code={`brew install node`} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Verify with <code>node -v</code> in the Zsh or Bash terminal.</p>
        </section>

        {/* Linux */}
        <section>
          <h3>3. Linux Setup (Ubuntu/Debian)</h3>
          <p>Use the NodeSource binary distributions for the latest version:</p>
          <CodeBlock code={`sudo apt update\nsudo apt install nodejs npm`} />
        </section>
      </div>

      <hr style={{ margin: '3rem 0', opacity: 0.2 }} />

      {/* Creating the Project */}
      <h2><Terminal size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Creating Your First App</h2>
      <p>Once Node.js is installed, use <strong>Vite</strong> (the recommended modern way) to scaffold your React project:</p>
      
      <CodeBlock 
        code={`# 1. Initialize the project\nnpm create vite@latest my-react-app -- --template react\n\n# 2. Enter the directory\ncd my-react-app\n\n# 3. Install dependencies\nnpm install\n\n# 4. Start the development server\nnpm run dev`} 
      />

      <div className="info-box" style={{ marginTop: '1.5rem' }}>
        <CheckCircle2 size={18} color="#10b981" /> <strong>Success!</strong> Your app will be running at <code>http://localhost:5173</code>.
      </div>

      {/* Video Section */}
      <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#000', color: '#fff', borderRadius: '16px' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', marginBottom: '1.5rem' }}>
          <PlayCircle color="#FF0000" /> Video Guide: Setting up React
        </h3>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src="https://www.youtube.com/embed/piMHJqLb8gE"
            title="React Installation Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Installation;