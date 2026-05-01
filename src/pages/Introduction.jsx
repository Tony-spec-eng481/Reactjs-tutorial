import React from "react";
import CodeBlock from "../components/CodeBlock";
import {
  ArrowRight,
  Box,
  Zap,
  Link as LinkIcon,
  Layers,
  PlayCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
  const cellStyle = {
    padding: "0.75rem",
    border: "1px solid var(--border-light)",
    textAlign: "left",
  };

  return (
    <div className="page-content animation-fade-in">
      <div className="page-header">
        <h1 className="page-title">⚛️ Introduction to ReactJS</h1>
        <div className="page-badge">Fundamentals • Modern UI</div>
      </div>

      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "1.5rem",
          color: "var(--text-primary)",
        }}
      >
        React JS is an open-source JavaScript library developed by Facebook
        (Meta) in 2013. It is designed for building fast, interactive user
        interfaces, primarily focusing on the <strong>view layer </strong>
        of single-page applications (SPAs).
      </p>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>
            <Box color="var(--brand-primary)" /> Component-Based
          </h3>
          <p>
            Build encapsulated, reusable pieces of UI like Buttons or Headers
            that manage their own state. Breaks UI into reusable pieces,
            improving the code reusability and scalability.
          </p>
        </div>
        <div className="feature-card">
          <h3>
            <Zap color="var(--brand-accent)" /> Virtual DOM
          </h3>
          <p>
            React creates a lightweight copy of the real DOM to minimize
            expensive browser updates. React updates only the changed parts of
            the DOM, resulting in faster rendering.
          </p>
        </div>
        <div className="feature-card">
          <h3>
            <LinkIcon color="var(--brand-secondary)" /> Declarative
          </h3>
          <p>
            Describe what you want the UI to look like, and React handles the
            "how" through efficient rendering.
          </p>
        </div>
      </div>

      <div className="info-box">
        <strong>✅ Key Characteristics</strong>
        <ul
          style={{
            marginLeft: "1.5rem",
            listStyle: "disc",
            marginTop: "0.5rem",
          }}
        >
          <li>
            <strong>JSX:</strong> JSX is a syntax extension for JavaScript that looks like HTML. It is the heart of React’s "Declarative" nature—you describe what the UI should look like, and React handles the rendering.

            Under the hood: Browsers cannot read JSX. Tools like Babel transpile JSX into standard React.createElement() calls.

            Expression Embedding: You can wrap any valid JavaScript expression in curly braces {"{ }"} . This allows you to embed dynamic content directly in your JSX.
            <CodeBlock
              code={`// Example: A simple React component
const UserProfile = () => {
  const user = { name: 'Alex', isAdmin: true };

  return (
    <div className="container">
      <h1>Welcome, {user.name}</h1>
      {user.isAdmin ? <button>Edit Profile</button> : <p>View Only Mode</p>}
    </div>
  );
};`}
            />
          </li>
          <li>
            <strong>One-way Data Flow:</strong> In React, data has one way of being transferred to other parts of the application: from Parent to Child.

            Props: Short for "properties." They are read-only objects passed from a parent component to a child.

            The Benefit: Since data only flows down, it is much easier to track where a bug is coming from. If a value is wrong in a child component, you only need to look at the parent that passed it.
          <CodeBlock
              code={`// Example: One-way data flow with props
// Parent Component
function Dashboard() {
  const [userScore] = useState(100);
  
  return (
    <div>
      {/* Passing data down via the 'score' prop */}
      <ScoreDisplay score={userScore} />
    </div>
  );
}

// Child Component
function ScoreDisplay(props) {
  // props.score is read-only; it cannot be changed here
  return <h2>Current Score: {props.score}</h2>;
}`}
            />
          </li>
          <li>
            <strong>React Router:</strong> Standard websites reload the entire page when you click a link. React Router enables Client-Side Routing, meaning only the components on the page swap out while the browser stays on the same page.
            <CodeBlock
              code={`// Example: Basic React Router setup
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </BrowserRouter>
  );
}`}
            />  
          </li>
          <li>
            <strong>React Fiber:</strong> React Fiber is the internal algorithm introduced in React 16. It changed how the Virtual DOM updates the Real DOM.

The Problem: Previously, React would update the DOM in one big "chunk." If the update was huge, the browser might freeze for a split second (dropping frames).

The Solution (Fiber): Fiber allows React to break rendering work into small units. It can:

Pause work and come back to it later.

Assign Priority to different types of updates (e.g., an animation gets higher priority than a hidden list update).

Reuse previously completed work.
          </li>
          <li>
            <strong>Virtual DOM vs. Real DOM</strong>To visualize why React is fast, consider this comparison:
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={cellStyle}>Real DOM</th>
          <th style={cellStyle}>Virtual DOM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>Updates are slow and "expensive"</td>
          <td style={cellStyle}>Updates are fast and "cheap" (just a JS object)</td>
        </tr>
        <tr>
          <td style={cellStyle}>Directly changes the browser UI</td>
          <td style={cellStyle}>Acts as a blueprint or draft</td>
        </tr>
        <tr>
          <td style={cellStyle}>Re-renders the whole tree on change</td>
          <td style={cellStyle}>Only updates specific "dirty" nodes (diffing)</td>
        </tr>
      </tbody>
    </table>
          </li>
        </ul>
      </div>

      <h2 style={{ marginTop: "2.5rem" }}>
        <Layers
          size={24}
          style={{ verticalAlign: "middle", marginRight: "10px" }}
        />{" "}
        How React Works (Internals)
      </h2>
      <p>
        React doesn't update the browser's DOM immediately. Instead, it follows
        a specific <strong>reconciliation</strong> process:
      </p>

      <div
        style={{
          backgroundColor: "var(--bg-secondary)",
          padding: "1.5rem",
          borderRadius: "8px",
          margin: "1rem 0",
        }}
      >
        <ol style={{ lineHeight: "1.8" }}>
          <li>
            <strong>JSX Transpilation:</strong> Babel converts your JSX into{" "}
            <code>React.createElement()</code> calls.
          </li>
          <li>
            <strong>Virtual DOM Tree:</strong> React builds an in-memory
            JavaScript object representing the UI.
          </li>
          <li>
            <strong>Diffing:</strong> When state changes, React creates a{" "}
            <em>new</em> Virtual DOM and compares it with the <em>previous</em>{" "}
            one.
          </li>
          <li>
            <strong>Efficient Patching:</strong> Only the detected differences
            (the "diff") are updated in the Real DOM.
          </li>
        </ol>
      </div>

      <h2 style={{ marginTop: "2rem" }}>A Simple Example</h2>
      <CodeBlock
        code={`// Example: A simple React component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using state with useState hook
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}
      />

      {/* YouTube Video Section */}
      <div
        style={{
          marginTop: "3rem",
          padding: "2rem",
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
          border: "1px solid #eee",
        }}
      >
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "1rem",
          }}
        >
          <PlayCircle color="#FF0000" /> Watch: React in 100 Seconds
        </h3>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            src="https://www.youtube.com/embed/N3AkSS5hXMA"
            title="React JS Explained"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
          New to React? This quick overview covers why it's the most popular UI
          library in the world.
        </p>
      </div>

      <div
        style={{
          marginTop: "2.5rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          paddingBottom: "4rem",
        }}
      >
        <Link to="/components" className="btn-primary">
          Start Learning Components <ArrowRight size={18} />
        </Link>
        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          Begin with the building blocks of React
        </span>
      </div>
    </div>
  );
};

export default Introduction;
