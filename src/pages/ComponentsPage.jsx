import React, { useState } from 'react';
import CodeBlock from '../components/CodeBlock';
import { Layers, Share2, Package, PlayCircle, Info } from 'lucide-react';

const ComponentsPage = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="page-content animation-fade-in">
      
      {/* ============================================ */}
      {/* PAGE HEADER - What this page is about */}
      {/* ============================================ */}
      <div className="page-header">
        <h1 className="page-title">🧩 Components in Detail</h1>
        <div className="page-badge">The Core Architecture</div>
      </div>
      
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        React components are independent, reusable bits of code. They serve the same purpose as JavaScript functions, 
        but work in isolation and return HTML via JSX.
      </p>

      {/* ============================================ */}
      {/* SECTION 1: WHAT IS A COMPONENT? (Beginner explanation) */}
      {/* ============================================ */}
      <div className="info-box">
        <h3><Info size={20} /> 1. The Component Philosophy - Think Like LEGO Bricks 🧱</h3>
        
        <p><strong>Imagine you're building a house:</strong></p>
        <ul>
          <li>❌ <strong>Bad approach:</strong> Pouring a giant block of concrete. You can't change anything easily.</li>
          <li>✅ <strong>Good approach:</strong> Using LEGO bricks. Each brick is small, reusable, and easy to swap out.</li>
        </ul>
        
        <p><strong>React components work exactly like LEGO bricks!</strong> Instead of writing one massive webpage with thousands of lines of code, you break it into small pieces:</p>
        
        <div style={{ backgroundColor: '#0b0b0b', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
          <strong>Example - A Facebook Feed page broken into components:</strong>
          <ul>
            <li>📱 <code>&lt;Navbar /&gt;</code> - The top blue bar with logo and search</li>
            <li>👤 <code>&lt;Sidebar /&gt;</code> - Your profile picture and shortcuts on the left</li>
            <li>📝 <code>&lt;CreatePost /&gt;</code> - The box where you type status updates</li>
            <li>💬 <code>&lt;Post /&gt;</code> - Each individual post (reused 10+ times!)</li>
            <li>💬 <code>&lt;Comment /&gt;</code> - Each comment under a post (reused many times)</li>
          </ul>
        </div>
        
        <p><strong>Why is this powerful?</strong></p>
        <ul>
          <li>✅ <strong>Reusability:</strong> Build once, use everywhere (like the <code>Post</code> component appears 50 times on a page)</li>
          <li>✅ <strong>Maintainability:</strong> Fix a bug in one place, it fixes everywhere</li>
          <li>✅ <strong>Team work:</strong> Different people can work on different components simultaneously</li>
          <li>✅ <strong>Testing:</strong> Test each component in isolation</li>
        </ul>
      </div>

      {/* ============================================ */}
      {/* SECTION 2: PROPS - How components talk to each other */}
      {/* ============================================ */}
      <h2 style={{ marginTop: '2.5rem' }}><Share2 size={24} /> 2. Props: The Input Data (Like Function Parameters)</h2>
      
      <p><strong>What are Props?</strong> Props (short for "properties") are how components receive data from their parents. Think of them like function arguments or HTML attributes.</p>
      
      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <p><strong>🔥 CRITICAL RULE:</strong> Props are <strong>READ-ONLY</strong>! A component can NEVER change its own props. 
        Just like you can't change a gift someone gave you - you can only use it. If you need to modify data, you use <strong>state</strong> (covered later).</p>
      </div>
      
      <p><strong>Real-world analogy:</strong> Imagine a <code>GreetingCard</code> component. The <strong>parent</strong> (you) decides the recipient's name, message, and color. The <strong>child</strong> (card) just displays what it receives. It can't change the name you wrote on it!</p>
      
      <CodeBlock 
        code={`// EXAMPLE 1: Simple prop passing
// ========================================

// The CHILD component - receives props and uses them
function Welcome(props) {
  // props.user comes from the parent
  // props is an OBJECT containing all passed data
  return <h1>Hello, {props.user}!</h1>;
}

// The PARENT component - sends data to child
function App() {
  return (
    <div>
      {/* Notice how 'user' becomes a property on props */}
      <Welcome user="Nora" />
      <Welcome user="Carlos" />
      <Welcome user="Emma" />
    </div>
  );
}

// EXAMPLE 2: Multiple props
// ========================================
function UserCard(props) {
  return (
    <div className="card">
      <img src={props.avatarUrl} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  );
}

// Using it:
<UserCard 
  name="John Doe"
  age={28}
  country="Canada"
  avatarUrl="https://example.com/photo.jpg"
/>

// EXAMPLE 3: Destructuring props (cleaner modern way)
// ========================================
function Welcome({ user, isLoggedIn }) {
  // Instead of props.user, props.isLoggedIn
  // We directly extract what we need
  return isLoggedIn ? <h1>Welcome back, {user}!</h1> : <h1>Please log in</h1>;
}`}
      />

      {/* ============================================ */}
      {/* SECTION 3: COMPOSITION - Building complex UIs */}
      {/* ============================================ */}
      <h2 style={{ marginTop: '2.5rem' }}><Package size={24} /> 3. Composition: Nesting Components Like Russian Dolls</h2>
      
      <p><strong>What is composition?</strong> It means putting components INSIDE other components. This is how you build complex interfaces from simple pieces.</p>
      
      <div style={{ backgroundColor: '#050506', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <strong>📦 Visual Example:</strong>
        <pre style={{ background: '#070707', padding: '0.5rem', marginTop: '0.5rem' }}>
{`<App>                    // The entire app
  ├─ <Header>            // Top section
  │    ├─ <Logo />       // Brand logo
  │    └─ <NavLinks />   // Navigation menu
  ├─ <MainContent>       // Middle section
  │    ├─ <Sidebar />    // Left sidebar
  │    └─ <ArticleList>  // Main content
  │         ├─ <Article> // Individual article #1
  │         ├─ <Article> // Individual article #2
  │         └─ <Article> // Individual article #3
  └─ <Footer>            // Bottom section`}
        </pre>
      </div>
      
      <CodeBlock 
        code={`// Building a Profile page using composition
// ========================================

// SMALL, REUSABLE PIECES
function Avatar({ imageUrl, name }) {
  return <img className="avatar" src={imageUrl} alt={name} />;
}

function UserInfo({ name, email, joinDate }) {
  return (
    <div className="info">
      <h3>{name}</h3>
      <p>{email}</p>
      <small>Joined: {joinDate}</small>
    </div>
  );
}

function SocialLinks({ twitter, github, linkedin }) {
  return (
    <div className="social-links">
      <a href={twitter}>Twitter</a>
      <a href={github}>GitHub</a>
      <a href={linkedin}>LinkedIn</a>
    </div>
  );
}

// COMPOSED COMPONENT (uses the smaller pieces)
function Profile(props) {
  return (
    <div className="user-profile">
      {/* Notice how we REUSE the smaller components */}
      <Avatar imageUrl={props.profilePic} name={props.fullName} />
      <UserInfo 
        name={props.fullName}
        email={props.email}
        joinDate={props.registered}
      />
      <SocialLinks 
        twitter={props.social.twitter}
        github={props.social.github}
        linkedin={props.social.linkedin}
      />
    </div>
  );
}

// USING THE COMPOSED PROFILE
function App() {
  const userData = {
    fullName: "Sarah Johnson",
    email: "sarah@example.com",
    registered: "January 2024",
    profilePic: "/sarah.jpg",
    social: {
      twitter: "https://twitter.com/sarah",
      github: "https://github.com/sarah",
      linkedin: "https://linkedin.com/in/sarah"
    }
  };
  
  return <Profile {...userData} />; // Spread operator passes all props
}`}
      />

      {/* ============================================ */}
      {/* SECTION 4: FUNCTIONAL vs CLASS COMPONENTS */}
      {/* ============================================ */}
      <h2 style={{ marginTop: '2.5rem' }}>4. Types of Components - Which One Should You Use?</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '1rem' }}>
        <div className="feature-card" style={{ background: '#111211' }}>
          <h4 style={{ color: '#2e7d32' }}>✅ Functional Components (The Modern Standard - USE THESE!)</h4>
          <p><strong>What they are:</strong> Simple JavaScript functions that return JSX.</p>
          <p><strong>When to use:</strong> ALWAYS for new code! They're simpler, faster, and easier to test.</p>
          <p><strong>Features:</strong></p>
          <ul>
            <li>Use <strong>Hooks</strong> (like useState, useEffect) for state and side effects</li>
            <li>No 'this' keyword confusion</li>
            <li>Less boilerplate code</li>
            <li>Easier to understand and debug</li>
          </ul>
          <CodeBlock code={`function Welcome({ name }) {
  const [count, setCount] = useState(0);
  return <h1 onClick={() => setCount(count+1)}>
    Hello {name}! Clicked {count} times
  </h1>;
}`} />
        </div>
        
        <div className="feature-card" style={{ background: '#111211' }}>
          <h4 style={{ color: '#e65100' }}>📜 Class Components (The Legacy Way - For Old Code Only)</h4>
          <p><strong>What they are:</strong> ES6 classes that extend React.Component.</p>
          <p><strong>When to use:</strong> Only when maintaining VERY old codebases (pre-2019).</p>
          <p><strong>Features:</strong></p>
          <ul>
            <li>Require 'this' keyword (confusing for beginners)</li>
            <li>More boilerplate (constructor, super, binding)</li>
            <li>Use lifecycle methods like componentDidMount</li>
            <li>No hooks support</li>
          </ul>
          <CodeBlock code={`class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <h1 onClick={() => this.setState({ 
      count: this.state.count + 1 
    })}>
      Hello {this.props.name}! Clicked {this.state.count} times
    </h1>;
  }
}`} />
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 5: RULES YOU MUST FOLLOW */}
      {/* ============================================ */}
      <div className="warning-box" style={{ marginTop: '2rem' }}>
        <strong>⚠️ 3 Critical Rules Every React Beginner Must Know:</strong>
        
        <ul style={{ marginTop: '0.5rem' }}>
          <li>
            <strong>1. COMPONENT NAMES MUST BE CAPITALIZED!</strong>
            <p>React treats lowercase names as regular HTML tags (like &lt;div&gt; or &lt;span&gt;). 
            If you write &lt;welcome /&gt;, React will look for an HTML tag named 'welcome' (which doesn't exist). 
            ALWAYS write &lt;Welcome /&gt; with a capital W!</p>
            <CodeBlock code={`// ✅ CORRECT:
<Welcome />
<UserProfile />
<Card />

// ❌ WRONG:
<welcome />
<userProfile />
<card />`} />
          </li>
          
          <li>
            <strong>2. COMPONENTS MUST RETURN A SINGLE ROOT ELEMENT</strong>
            <p>You can't return multiple sibling elements directly. Wrap them in a parent div OR use React Fragments (&lt;&gt;...&lt;/&gt;).</p>
            <CodeBlock code={`// ✅ CORRECT - Using a div wrapper:
function MyComponent() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ CORRECT - Using Fragment (no extra DOM element):
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}

// ❌ WRONG - Adjacent elements without wrapper:
function MyComponent() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>  // ERROR! Can't return two things
  );
}`} />
          </li>
          
          <li>
            <strong>3. PURE FUNCTIONS RULE - Never modify props!</strong>
            <p>A component must be a "pure function" - same input (props) always produces same output (JSX).</p>
            <CodeBlock code={`// ✅ CORRECT - Just using props:
function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}

// ❌ WRONG - Trying to modify props:
function Greeting({ name }) {
  name = name.toUpperCase(); // ERROR! Can't modify props
  return <h1>Hello {name}!</h1>;
}`} />
          </li>
        </ul>
      </div>

      {/* ============================================ */}
      {/* SECTION 6: INTERACTIVE DEMO - Component Lifecycle */}
      {/* ============================================ */}
      <div style={{ marginTop: '3rem' }}>
        <button className="btn-primary" onClick={() => setShowDemo(!showDemo)}>
          <Layers size={18} /> {showDemo ? 'Hide Lifecycle Demo' : 'See Component Lifecycle Demo'}
        </button>
        
        {showDemo && (
          <div className="demo-box animation-fade-in" style={{ border: '2px solid var(--brand-primary)', marginTop: '1rem', padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--brand-primary)' }}>🔄 Component Lifecycle - What Happens Behind the Scenes</h3>
            
            <p><strong>Every React component goes through 3 main phases:</strong></p>
            
            <ol style={{ marginBottom: '1rem' }}>
              <li><strong>MOUNTING</strong> 🎬 - Component is created and inserted into the DOM (appears on screen)</li>
              <li><strong>UPDATING</strong> 🔄 - Component re-renders because props or state changed</li>
              <li><strong>UNMOUNTING</strong> ❌ - Component is removed from the DOM (disappears)</li>
            </ol>
            
            <div className="demo-output" style={{ background: '#e8f5e9', padding: '1rem', borderRadius: '8px' }}>
              <code>{`Status: Component Is Mounted ✅`}</code>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                💡 Tip: In functional components, you can "hook into" these lifecycle events using 
                the useEffect Hook. For example: {"useEffect(() => { console.log('Mounted!'); }, []);"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ============================================ */}
      {/* SECTION 7: VIDEO TUTORIAL */}
      {/* ============================================ */}
      <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '12px', border: '1px solid #ddd' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PlayCircle color="#FF0000" /> 🎥 Watch & Learn: Components & Props Explained Visually
        </h3>
        
        <p>If you're a visual learner, this video explains everything above with animations and real examples:</p>
        
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginTop: '1rem' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src="https://www.youtube.com/embed/Y2hgEGPzTZY" 
            title="React Components Explained"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          📚 <strong>Pro tip:</strong> After watching, try building a simple Card component that receives 
          "title", "description", and "imageUrl" as props. Practice makes perfect!
        </p>
      </div>

      {/* ============================================ */}
      {/* BONUS: Summary Cheatsheet */}
      {/* ============================================ */}
      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white' }}>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>📋 Quick Reference Cheatsheet</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div>
            <strong>✅ DO This:</strong>
            <ul style={{ marginTop: '0.5rem' }}>
              <li>Use functional components</li>
              <li>Capitalize component names</li>
              <li>Use fragments &lt;&gt;&lt;/&gt;</li>
              <li>Treat props as read-only</li>
              <li>Compose small components</li>
            </ul>
          </div>
          <div>
            <strong>❌ DON'T Do This:</strong>
            <ul style={{ marginTop: '0.5rem' }}>
              <li>Modify props directly</li>
              <li>Use lowercase names</li>
              <li>Return sibling elements</li>
              <li>Write huge components</li>
              <li>Use classes for new code</li>
            </ul>
          </div>
          <div>
            <strong>🔑 Key Terms:</strong>
            <ul style={{ marginTop: '0.5rem' }}>
              <li><strong>Props:</strong> Input data</li>
              <li><strong>Composition:</strong> Nesting</li>
              <li><strong>Mounting:</strong> First render</li>
              <li><strong>Reusability:</strong> Build once</li>
              <li><strong>JSX:</strong> HTML in JS</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ComponentsPage;