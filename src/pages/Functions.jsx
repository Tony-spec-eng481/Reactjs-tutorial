import React from 'react';
import CodeBlock from '../components/CodeBlock';
import { Settings, MousePointer2, Zap, PlayCircle, ArrowRight, Download, Eye, Package, Info } from 'lucide-react';

const Functions = () => {
  return (
    <div className="page-content animation-fade-in">
      
      {/* ============================================ */}
      {/* PAGE HEADER */}
      {/* ============================================ */}
      <div className="page-header">
        <h1 className="page-title">🔧 Functions in React</h1>
        <div className="page-badge">Logic & Rendering - The Heart of React</div>
      </div>
      
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        In React, functions aren't just for calculations; they are the <strong>architects</strong> of your UI. 
        Almost every modern React app is built using "Functional Components" - which are simply JavaScript functions that return HTML (JSX).
      </p>

      {/* ============================================ */}
      {/* SECTION 1: WHAT IS A FUNCTION IN JAVASCRIPT? (Beginner Basics) */}
      {/* ============================================ */}
      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h3><Info size={20} /> What is a Function? (The Foundation)</h3>
        
        <p><strong>A function is a reusable block of code that performs a specific task.</strong> Think of it like a recipe:</p>
        
        <ul>
          <li>📝 You give it <strong>ingredients</strong> (inputs/parameters)</li>
          <li>👩‍🍳 It follows <strong>instructions</strong> (the code inside)</li>
          <li>🍲 It produces <strong>results</strong> (the return value)</li>
        </ul>
        
        <div className="info-box" style={{ marginTop: '1rem' }}>
          <strong>🎯 Why are functions important in React?</strong>
          <p>React components ARE functions! Every time you create a React component, you're actually creating a function that returns what should appear on the screen.</p>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 2: TWO WAYS TO WRITE FUNCTIONS (Standard vs Arrow) */}
      {/* ============================================ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2><Settings size={22} /> 1. Two Ways to Write Functions in JavaScript/React</h2>
        
        <p>React gives you two syntax options for creating functions. Both work, but arrow functions are now the <strong>modern standard</strong>.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '1.5rem' }}>
          {/* Standard Functions Card */}
          <div className="feature-card">
            <h4 style={{ color: 'var(--brand-primary)' }}>📜 Standard Function Declaration</h4>
            <p><strong>Syntax:</strong> <code>{"function name() { }"}</code></p>
            <p><strong>When to use:</strong> When you need function hoisting (can call before definition)</p>
            <p><strong>Characteristics:</strong></p>
            <ul>
              <li>Has its own <code>this</code> binding</li>
              <li>Can be used before it's defined (hoisting)</li>
              <li>Traditional JavaScript syntax</li>
            </ul>
            <CodeBlock code={`// Can be called BEFORE declaration
sayHello(); // Works!

function sayHello() {
  console.log("Hello!");
  return <h1>Hello World</h1>;
}

// React component example
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}`} />
          </div>
          
          {/* Arrow Functions Card */}
          <div className="feature-card">
            <h4 style={{ color: 'var(--brand-accent)' }}>✅ Arrow Function (Modern Standard)</h4>
            <p><strong>Syntax:</strong> <code>{"const name = () => { }"}</code></p>
            <p><strong>When to use:</strong> ALWAYS for React components (industry standard)</p>
            <p><strong>Characteristics:</strong></p>
            <ul>
              <li>No own <code>this</code> binding (inherits from parent)</li>
              <li><strong>Shorter and cleaner</strong> syntax</li>
              <li>Cannot be used before declaration</li>
              <li>Perfect for React functional components</li>
            </ul>
            <CodeBlock code={`// Must be defined BEFORE use
const sayHello = () => {
  console.log("Hello!");
  return <h1>Hello World</h1>;
};

// React component example (THE STANDARD)
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Even shorter with implicit return
const Welcome = (props) => <h1>Hello, {props.name}!</h1>;`} />
          </div>
        </div>
        
        <div className="info-box" style={{ marginTop: '1rem' }}>
          <strong>🔥 PRO TIP:</strong> In professional React development, arrow functions are used 95% of the time. 
          They're cleaner, more predictable, and work better with React's patterns.
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: FUNCTIONAL COMPONENTS - THE BUILDING BLOCKS */}
      {/* ============================================ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2><Package size={22} /> 2. Functional Components - What They Are & How They Work</h2>
        
        <p><strong>A functional component is simply a JavaScript function that returns JSX (React's HTML-like syntax).</strong></p>
        
        <div className="info-box" style={{ marginBottom: '1.5rem' }}>
          <strong>📦 Anatomy of a Functional Component:</strong>
          <pre style={{ background: 'var(--bg-primary)', padding: '1rem', marginTop: '0.5rem', overflowX: 'auto', borderRadius: 'var(--radius-md)' }}>
{`const ComponentName = (props) => {
  // 1. IMPORT SECTION
  import { useState, useEffect } from 'react';
  
  // 2. LOGIC SECTION (Hooks, calculations, event handlers)
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  
  // 3. RETURN SECTION (What appears on screen)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};`}
          </pre>
        </div>
        
        <h3>🎯 Complete Example: Building a Real Component</h3>
        
        <CodeBlock 
          code={`// Example 1: A Simple Greeting Component
// ============================================

const Greeting = ({ name, isLoggedIn }) => {
  // Logic: Decide what message to show
  const getMessage = () => {
    if (isLoggedIn) {
      return \`Welcome back, \${name}!\`;
    } else {
      return "Please log in to continue";
    }
  };
  
  // Return: What renders on screen
  return (
    <div className="greeting-container">
      <h2>{getMessage()}</h2>
      {isLoggedIn && <button>View Profile</button>}
    </div>
  );
};

// Example 2: Todo Item Component with Features
// ============================================

const TodoItem = ({ task, isCompleted, onDelete, onToggle }) => {
  // Inline styles based on completion status
  const taskStyle = {
    textDecoration: isCompleted ? 'line-through' : 'none',
    color: isCompleted ? '#888' : '#000'
  };
  
  return (
    <li className="todo-item">
      <input 
        type="checkbox" 
        checked={isCompleted}
        onChange={onToggle}
      />
      <span style={taskStyle}>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

// Example 3: Counter Component with Full Features
// ============================================

const Counter = () => {
  const [count, setCount] = React.useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};`}
        />
      </section>

      {/* ============================================ */}
      {/* SECTION 4: IMPORTING, EXPORTING, AND RENDERING FUNCTIONS */}
      {/* ============================================ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2><ArrowRight size={22} /> 3. Importing, Exporting, and Rendering Components</h2>
        
        <p><strong>React uses ES6 modules to organize code.</strong> You write components in separate files, then import/export them to use across your app.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '1.5rem' }}>
          {/* Export Card */}
          <div className="feature-card">
            <h4 style={{ color: '#2e7d32' }}>📤 Exporting Components (2 Ways)</h4>
            <CodeBlock code={`// METHOD 1: Named Export (Multiple exports per file)
// File: components/Button.jsx
export const PrimaryButton = () => <button>Primary</button>;
export const SecondaryButton = () => <button>Secondary</button>;
export const DangerButton = () => <button>Danger</button>;

// METHOD 2: Default Export (One main export per file)
// File: components/Navbar.jsx
const Navbar = () => {
  return <nav>Navigation Bar</nav>;
};
export default Navbar;

// METHOD 3: Export at the end (cleaner for multiple)
// File: components/Card.jsx
const Card = ({ children }) => <div className="card">{children}</div>;
const CardHeader = ({ title }) => <h3>{title}</h3>;
const CardBody = ({ content }) => <p>{content}</p>;

export { Card, CardHeader, CardBody };
export default Card; // Default export`} />
          </div>
          
          {/* Import Card */}
          <div className="feature-card">
            <h4 style={{ color: '#1565c0' }}>📥 Importing Components</h4>
            <CodeBlock code={`// Import DEFAULT export (no curly braces)
import Navbar from './components/Navbar';

// Import NAMED exports (use curly braces)
import { PrimaryButton, SecondaryButton } from './components/Button';

// Import BOTH default and named
import Card, { CardHeader, CardBody } from './components/Card';

// Import and rename (avoid conflicts)
import { PrimaryButton as BlueButton } from './components/Button';

// Import everything as an object
import * as Buttons from './components/Button';
// Then use: <Buttons.PrimaryButton />

// Import with relative paths
import Welcome from '../components/Welcome';      // Go up one folder
import Header from './Header';                     // Same folder`} />
          </div>
        </div>
        
        <h3>🔄 Rendering Components (How They Appear on Screen)</h3>
        
        <CodeBlock 
          code={`// COMPLETE EXAMPLE: Building and Using a Component
// ===================================================

// FILE 1: components/UserCard.jsx
// ---------------------------------
import React from 'react';

const UserCard = ({ name, email, avatar }) => {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;


// FILE 2: App.jsx (Main Application)
// ---------------------------------
import React from 'react';
import UserCard from './components/UserCard';  // Import the component
import { PrimaryButton } from './components/Button';

function App() {
  // Data to pass to components
  const users = [
    { id: 1, name: "Alice", email: "alice@email.com", avatar: "/alice.jpg" },
    { id: 2, name: "Bob", email: "bob@email.com", avatar: "/bob.jpg" },
    { id: 3, name: "Charlie", email: "charlie@email.com", avatar: "/charlie.jpg" }
  ];
  
  return (
    <div className="App">
      <h1>User Directory</h1>
      
      {/* Render UserCard for each user */}
      {users.map(user => (
        <UserCard 
          key={user.id}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
      
      <PrimaryButton />
    </div>
  );
}

export default App;

// FILE 3: index.js (Entry Point - Where rendering starts)
// ---------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is where React puts your app in the real HTML page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* The App component gets rendered */}
  </React.StrictMode>
);`}
        />
        
        <div className="warning-box" style={{ marginTop: '1rem' }}>
          <strong>🎯 Key Points About Rendering:</strong>
          <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
            <li>Components are rendered using <strong>JSX tags</strong>: <code>&lt;ComponentName /&gt;</code></li>
            <li>Components can be <strong>nested</strong> inside other components</li>
            <li>Components <strong>re-render</strong> when their props change or state updates</li>
            <li>The <strong>root component</strong> (usually App) is rendered into the real DOM</li>
          </ul>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: LOGIC INSIDE FUNCTIONS (What happens before return) */}
      {/* ============================================ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2><Zap size={22} /> 4. Adding Logic Before the Return Statement</h2>
        
        <p><strong>A React function has two main parts:</strong> the <strong>Logic Area</strong> (where you process data, calculate values, prepare content) and the <strong>Return Area</strong> (the JSX that renders to screen).</p>
        
        <div className="info-box" style={{ marginBottom: '1.5rem' }}>
          <strong>💡 What can you do in the Logic Area?</strong>
          <ul>
            <li>✅ Calculate values based on props</li>
            <li>✅ Transform or filter arrays</li>
            <li>✅ Format dates, numbers, or text</li>
            <li>✅ Define helper functions</li>
            <li>✅ Use React Hooks (useState, useEffect, etc.)</li>
            <li>✅ Write if statements and loops</li>
          </ul>
        </div>
        
        <CodeBlock 
          code={`// ADVANCED EXAMPLE: Todo List with Complex Logic
// ==================================================

const TodoList = ({ tasks, filterStatus }) => {
  // ----- LOGIC AREA (Everything here runs before rendering) -----
  
  // 1. Calculate derived data
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionRate = (completedTasks / totalTasks) * 100;
  
  // 2. Transform data based on filter
  const getFilteredTasks = () => {
    switch(filterStatus) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };
  
  const filteredTasks = getFilteredTasks();
  
  // 3. Format data for display
  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // 4. Conditional logic for UI elements
  const showCongrats = completionRate === 100 && totalTasks > 0;
  const showEmptyState = filteredTasks.length === 0;
  
  // 5. Helper functions for events
  const handleTaskClick = (taskId) => {
    console.log(\`Task \${taskId} was clicked\`);
    // Usually you'd call a state update function here
  };
  
  // ----- RETURN AREA (What actually shows on screen) -----
  return (
    <div className="todo-container">
      <h2>My Todo List</h2>
      <p>Today is: {formattedDate}</p>
      <p>Progress: {completedTasks}/{totalTasks} completed ({Math.round(completionRate)}%)</p>
      
      {showCongrats && (
        <div className="congrats">
          🎉 Amazing! You've completed all tasks! 🎉
        </div>
      )}
      
      {showEmptyState ? (
        <p>No tasks to show</p>
      ) : (
        <ul>
          {filteredTasks.map(task => (
            <li 
              key={task.id}
              onClick={() => handleTaskClick(task.id)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// SIMPLE EXAMPLE: Product Card with Calculations
// ===============================================

const ProductCard = ({ product, discountPercentage }) => {
  // Logic: Calculate the discounted price
  const originalPrice = product.price;
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountAmount;
  const savings = discountAmount.toFixed(2);
  
  // Logic: Format the price for display
  const formattedOriginal = \`$\${originalPrice.toFixed(2)}\`;
  const formattedFinal = \`$\${finalPrice.toFixed(2)}\`;
  
  // Logic: Decide if this is a "hot deal" (40% off or more)
  const isHotDeal = discountPercentage >= 40;
  
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      {isHotDeal && <span className="hot-badge">🔥 HOT DEAL</span>}
      <p className="original-price">{formattedOriginal}</p>
      <p className="final-price">
        <strong>{formattedFinal}</strong>
        <span className="savings"> (Save \${savings})</span>
      </p>
    </div>
  );
};`}
        />
      </section>

      {/* ============================================ */}
      {/* SECTION 6: HANDLING EVENTS WITH FUNCTIONS */}
      {/* ============================================ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2><MousePointer2 size={22} /> 5. Handling Events - Responding to User Actions</h2>
        
        <p><strong>Functions are used to respond to user interactions</strong> like clicks, typing, hovering, and form submissions.</p>
        
        <div className="info-box" style={{ marginBottom: '1rem' }}>
          <strong>🎯 Common Events in React:</strong>
          <ul>
            <li><code>onClick</code> - Clicking buttons, divs, or any element</li>
            <li><code>onChange</code> - Typing in input fields</li>
            <li><code>onSubmit</code> - Submitting forms</li>
            <li><code>onMouseEnter</code> / <code>onMouseLeave</code> - Hovering</li>
            <li><code>onFocus</code> / <code>onBlur</code> - Input focus</li>
            <li><code>onKeyPress</code> - Keyboard interactions</li>
          </ul>
        </div>
        
        <CodeBlock 
          code={`// EXAMPLE 1: Basic Event Handlers
// ====================================

const EventDemo = () => {
  // Define event handler functions
  const handleClick = () => {
    alert("Button was clicked!");
  };
  
  const handleMouseEnter = () => {
    console.log("Mouse entered the div");
  };
  
  const handleInputChange = (event) => {
    console.log("Typed:", event.target.value);
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      
      <div onMouseEnter={handleMouseEnter}>
        Hover over me
      </div>
      
      <input 
        type="text" 
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

// EXAMPLE 2: Event Handler with Parameters
// =========================================

const TodoApp = () => {
  const handleDelete = (todoId, todoName) => {
    console.log(\`Deleting todo: \${todoName} (ID: \${todoId})\`);
    // Typically you'd call an API or update state here
  };
  
  const todos = [
    { id: 1, name: "Buy groceries" },
    { id: 2, name: "Walk the dog" },
    { id: 3, name: "Learn React" }
  ];
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.name}
          {/* Use arrow function to pass parameters */}
          <button onClick={() => handleDelete(todo.id, todo.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// EXAMPLE 3: Form Handling with Multiple Events
// ==============================================

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Single handler for all inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted:", formData);
    alert("Message sent!");
  };
  
  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        required
      />
      
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Your Email"
        required
      />
      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Your Message"
        required
      />
      
      <button type="submit">Send Message</button>
      <button type="button" onClick={handleReset}>Reset Form</button>
    </form>
  );
};

// EXAMPLE 4: Event Best Practices
// =================================

const BestPractices = () => {
  // ✅ DO: Define handlers outside JSX for cleaner code
  const handleSave = () => {
    console.log("Saving...");
  };
  
  // ✅ DO: Use arrow functions for callbacks
  const handleDelete = (id) => {
    console.log("Deleting:", id);
  };
  
  // ❌ AVOID: Defining functions inside JSX (recreates on every render)
  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => handleDelete(1)}>Delete</button>
      
      {/* ✅ DO: Use useCallback for expensive handlers that get passed down */}
      {/* See React Hooks documentation for useCallback */}
    </div>
  );
};`}
        />
      </section>

      {/* ============================================ */}
      {/* SECTION 7: ARROW FUNCTIONS DEEP DIVE */}
      {/* ============================================ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2><ArrowRight size={22} /> 6. Arrow Functions - The Modern Standard (Deep Dive)</h2>
        
        <div className="info-box" style={{ marginBottom: '1.5rem' }}>
          <strong>✅ Why arrow functions dominate React development:</strong>
          <ul>
            <li><strong>No 'this' binding issues</strong> - They inherit 'this' from parent scope</li>
            <li><strong>Concise syntax</strong> - Less boilerplate code</li>
            <li><strong>Implicit return</strong> - Can return without 'return' keyword</li>
            <li><strong>Works perfectly with Hooks</strong> - useState, useEffect, etc.</li>
            <li><strong>Industry standard</strong> - 95% of React code uses them</li>
          </ul>
        </div>
        
        <h3>📖 Arrow Function Syntax Variations</h3>
        
        <CodeBlock 
          code={`// 1. Basic arrow function with explicit return
// ===============================================
const add = (a, b) => {
  const result = a + b;
  return result;
};

// 2. Implicit return (no braces, no 'return' keyword)
// ===============================================
const add = (a, b) => a + b;
// Works for single expressions only

// 3. Single parameter (parentheses optional)
// ===============================================
const square = x => x * x;
// const double = (x) => x * 2;  // Also works

// 4. No parameters (empty parentheses required)
// ===============================================
const sayHello = () => console.log("Hello!");

// 5. Returning an object (wrap in parentheses)
// ===============================================
const getUser = () => ({ name: "John", age: 30 });
// Without parentheses, {} would be interpreted as function body

// 6. Arrow function as React component
// ===============================================
// Version 1: With explicit return
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
};

// Version 2: With implicit return (common in modern React)
const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="btn">
    {children}
  </button>
);

// Version 3: Single line component
const Button = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;

// 7. Multiple arrow functions (currying)
// ===============================================
const multiply = (a) => (b) => a * b;
const double = multiply(2);
console.log(double(5)); // 10

// 8. Async arrow functions
// ===============================================
const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  return response.json();
};`}
        />
        
        <div className="warning-box" style={{ marginTop: '1rem' }}>
          <strong>⚠️ When NOT to use arrow functions:</strong>
          <ul>
            <li><strong>Object methods</strong> that need their own 'this' binding</li>
            <li><strong>Constructors</strong> (arrow functions can't be constructors)</li>
            <li><strong>When you need the 'arguments' object</strong> (arrow functions don't have it)</li>
            <li><strong>Prototype methods</strong> (arrow functions don't work well with prototypes)</li>
          </ul>
          <p><em>For React components, you can safely use arrow functions 100% of the time!</em></p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: COMPLETE REAL-WORLD EXAMPLE */}
      {/* ============================================ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2><Eye size={22} /> 7. Real-World Example: Complete React Application Structure</h2>
        
        <CodeBlock 
          code={`// COMPLETE WORKING APP: Shopping Cart
// =========================================

// FILE 1: ProductCard.jsx
// -------------------------
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddClick = () => {
    onAddToCart(product.id);
  };
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">\${product.price}</p>
      <button onClick={handleAddClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;


// FILE 2: Cart.jsx
// -------------------------
import React from 'react';

const Cart = ({ items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (items.length === 0) {
    return <p>Your cart is empty</p>;
  }
  
  return (
    <div className="cart">
      <h2>Shopping Cart ({items.length} items)</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
            min="1"
          />
          <span>\${item.price * item.quantity}</span>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
      <div className="total">
        <strong>Total: \${total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Cart;


// FILE 3: App.jsx (Main Application)
// -------------------------
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';

const App = () => {
  // State management
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: "Laptop", price: 999, image: "/laptop.jpg" },
    { id: 2, name: "Mouse", price: 29, image: "/mouse.jpg" },
    { id: 3, name: "Keyboard", price: 89, image: "/keyboard.jpg" }
  ];
  
  // Helper functions
  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      // Update quantity
      setCart(cart.map(item =>
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new item
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };
  
  // Render the app
  return (
    <div className="app">
      <header>
        <h1>My Shop</h1>
      </header>
      
      <main>
        <div className="products-grid">
          <h2>Products</h2>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        
        <div className="cart-sidebar">
          <Cart
            items={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        </div>
      </main>
    </div>
  );
};

export default App;`}
        />
      </section>

      {/* ============================================ */}
      {/* VIDEO SECTION */}
      {/* ============================================ */}
      <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PlayCircle color="#FF0000" /> 🎥 Deep Dive: JavaScript Functions for React
        </h3>
        
        <p>This video explains everything we covered with visual examples and real-world coding:</p>
        
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginTop: '1rem' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src="https://www.youtube.com/embed/Cla1WwguArA" 
            title="React Functions Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="info-box" style={{ marginTop: '1rem' }}>
          <strong>📚 Key Takeaways from this Video:</strong>
          <ul>
            <li>Functions are the building blocks of React</li>
            <li>Arrow functions vs standard functions in React</li>
            <li>How to pass data between functions</li>
            <li>Common mistakes and how to avoid them</li>
          </ul>
        </div>
      </div>

      {/* ============================================ */}
      {/* SUMMARY CHEATSHEET */}
      {/* ============================================ */}
      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))', borderRadius: 'var(--radius-lg)', color: '#fff' }}>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>📋 Quick Reference: Functions in React</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div>
            <strong>✅ BEST PRACTICES:</strong>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              <li>Use arrow functions for components</li>
              <li>Keep components small and focused</li>
              <li>Define handlers outside JSX</li>
              <li>Use descriptive function names</li>
              <li>Export default for main components</li>
            </ul>
          </div>
          
          <div>
            <strong>❌ COMMON MISTAKES:</strong>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              <li>Calling functions in JSX (use reference)</li>
              <li>Forgetting to bind event handlers</li>
              <li>Mutating props or state</li>
              <li>Creating functions inside render</li>
              <li>Not using arrow functions for callbacks</li>
            </ul>
          </div>
          
          <div>
            <strong>🔑 KEY PATTERNS:</strong>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              <li>Functional Components</li>
              <li>Event Handlers (onClick, onChange)</li>
              <li>Hooks (useState, useEffect)</li>
              <li>Props as function parameters</li>
              <li>Inline arrow functions for parameters</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Functions;