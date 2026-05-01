import React from 'react';
import CodeBlock from '../components/CodeBlock';
import { Code, Info, HelpCircle, Terminal, PlayCircle } from 'lucide-react';

const JSXIntroduction = () => {
  return (
    <div className="page-content animation-fade-in">
      <div className="page-header">
        <h1 className="page-title">✨ JSX: JavaScript XML</h1>
        <div className="page-badge">UI Syntax • Beginner Guide</div>
      </div>

      <section>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          <strong>JSX</strong> stands for JavaScript XML. It is a syntax extension for JavaScript 
          that allows you to write what looks like HTML directly inside your JavaScript file. 
          React uses it to describe what the UI should look like.
        </p>
      </section>

      {/* 1. The Basic Concept */}
      <section style={{ marginTop: '2rem' }}>
        <h2>1. The Basic Concept</h2>
        <p>
          Without JSX, you would have to write complex <code>React.createElement()</code> functions for every element. 
          JSX makes your code readable and easy to write.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '1rem' }}>
          <div className="info-box">
            <strong>With JSX (Easy)</strong>
            <code>const element = &lt;h1&gt;Hello!&lt;/h1&gt;;</code>
          </div>
          <div className="info-box">
            <strong>Without JSX (Hard)</strong>
            <code>React.createElement('h1', null, 'Hello!')</code>
          </div>
        </div>
      </section>

      {/* 2. Expressions in JSX */}
      <section style={{ marginTop: '2.5rem' }}>
        <h2>2. Embedding Expressions</h2>
        <p>
          You can put any valid JavaScript expression inside <strong>curly braces {"{}"}</strong>. 
          This allows you to display dynamic data, perform math, or call functions.
        </p>
        <CodeBlock 
          code={`function MyComponent() {
  const name = "Alex";
  const age = 25;

  return (
    <div>
      <h1>Welcome, {name}</h1>
      <p>Next year you will be {age + 1} years old.</p>
    </div>
  );
}`}
        />
      </section>

      {/* 3. Attributes & Classes */}
      <section style={{ marginTop: '2.5rem' }}>
        <h2>3. Attributes (Props)</h2>
        <p>
          JSX uses attributes just like HTML, but since it is JavaScript, we use <strong>camelCase</strong> naming.
        </p>
        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Instead of <code>class</code>, use <code>className</code>.</li>
          <li>Instead of <code>onclick</code>, use <code>onClick</code>.</li>
          <li>Attributes can be strings or dynamic expressions.</li>
        </ul>
        <CodeBlock 
          code={`const myImage = "profile.png";

// Static string attribute
const element1 = <div className="header">Header</div>;

// Dynamic expression attribute
const element2 = <img src={myImage} alt="Profile" />;`}
        />
      </section>

      {/* 4. Conditional Rendering (The "If" Logic) */}
      <section style={{ marginTop: '2.5rem' }}>
        <h2>4. Conditional Rendering (If Statements)</h2>
        <p>
          You <strong>cannot</strong> put a standard <code>if</code> statement inside the curly braces of your JSX. 
          Instead, you use three common patterns:
        </p>

        <h3>Option A: Ternary Operator (Inside JSX)</h3>
        <CodeBlock code={`// condition ? true : false
const Greeting = ({ isLoggedIn }) => {
  return (
    <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>
  );
};`} />

        <h3>Option B: Logic AND (&&)</h3>
        <p>Use this when you want to show something ONLY if a condition is true.</p>
        <CodeBlock code={`const Notification = ({ count }) => {
  return (
    <div>
      {count > 0 && <p>You have {count} new messages!</p>}
    </div>
  );
};`} />

        <h3>Option C: External If Statement</h3>
        <CodeBlock code={`function App() {
  const score = 10;
  let message;

  if (score > 5) {
    message = <h2>Great Job!</h2>;
  } else {
    message = <h2>Keep Practicing</h2>;
  }

  return <div>{message}</div>;
}`} />
      </section>

      {/* Rules of JSX */}
      <div className="info-box" style={{ marginTop: '2.5rem', border: '1px solid #ffcc00', backgroundColor: '#fffdf0' }}>
        <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HelpCircle color="#ffcc00" size={20} /> Essential Rules
        </h3>
        <ol>
          <li><strong>Return a Single Root:</strong> You must wrap multiple elements in one parent (like a <code>&lt;div&gt;</code> or a Fragment <code>&lt;&gt;...&lt;/&gt;</code>).</li>
          <li><strong>Close All Tags:</strong> Even self-closing tags like <code>&lt;img /&gt;</code> or <code>&lt;br /&gt;</code> must be closed.</li>
          <li><strong>CamelCase:</strong> HTML attributes like <code>tabindex</code> become <code>tabIndex</code>.</li>
        </ol>
      </div>

      {/* Video Section */}
      <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#f0f2f5', borderRadius: '16px' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PlayCircle color="#FF0000" /> Watch: JSX for Absolute Beginners
        </h3>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginTop: '1.5rem' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src="https://www.youtube.com/embed/7fPXI_MnBOY"
            title="JSX Explained"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default JSXIntroduction;