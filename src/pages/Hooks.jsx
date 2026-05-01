import React, { useState, useEffect, useContext, createContext, useReducer, useRef, useCallback, useMemo, useLayoutEffect, useImperativeHandle, forwardRef } from 'react';
import CodeBlock from '../components/CodeBlock';
import { Anchor, Zap, Activity, Globe, PlayCircle, BookOpen, TrendingUp, RefreshCw, Save, Eye, CheckSquare, Clock } from 'lucide-react';

const Hooks = () => {
  return (
    <div className="page-content animation-fade-in">
      
      {/* ============================================ */}
      {/* PAGE HEADER */}
      {/* ============================================ */}
      <div className="page-header">
        <h1 className="page-title">🪝 React Hooks in Detail</h1>
        <div className="page-badge">Modern React Architecture - Complete Guide</div>
      </div>
      
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Hooks are functions that let you "hook into" React state and lifecycle features from function components. 
        They were introduced in <strong>React 16.8 (February 2019)</strong> and completely changed how we write React applications.
      </p>

      {/* ============================================ */}
      {/* SECTION 1: WHAT ARE HOOKS? (Definition & Overview) */}
      {/* ============================================ */}
      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h3><BookOpen size={20} /> What are React Hooks? Complete Definition (25 Marks Answer)</h3>
        
        <p><strong>Definition:</strong> React Hooks are special JavaScript functions that allow functional components to use state, lifecycle methods, and other React features that were previously only available in class components.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '1rem' }}>
          <div className="feature-card">
            <strong>🎯 Primary Functions of Hooks:</strong>
            <ul style={{ marginTop: '0.5rem' }}>
              <li><strong>State Management:</strong> Add and manage state in functional components</li>
              <li><strong>Lifecycle Control:</strong> Execute code at specific points (mount, update, unmount)</li>
              <li><strong>Context Access:</strong> Consume context without nesting components</li>
              <li><strong>Performance Optimization:</strong> Memoize values and functions</li>
              <li><strong>Ref Management:</strong> Directly access DOM elements</li>
              <li><strong>Code Reusability:</strong> Extract and reuse stateful logic across components</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <strong>✅ Advantages of Using Hooks:</strong>
            <ul style={{ marginTop: '0.5rem' }}>
              <li><strong>Simpler Code:</strong> Remove class boilerplate (no 'this', no binding)</li>
              <li><strong>Reusability:</strong> Create custom hooks to share logic between components</li>
              <li><strong>Better Organization:</strong> Group related logic together (unlike lifecycle methods)</li>
              <li><strong>Smaller Bundle Size:</strong> Functional components with hooks are more lightweight</li>
              <li><strong>Easier Testing:</strong> Isolate and test hook logic independently</li>
              <li><strong>Future-Proof:</strong> React team is focusing development on hooks</li>
              <li><strong>No Breaking Changes:</strong> Hooks work alongside existing class components</li>
            </ul>
          </div>
        </div>
        
        <div className="warning-box" style={{ marginTop: '1rem' }}>
          <strong>📊 Before vs After Hooks:</strong>
          <pre style={{ marginTop: '0.5rem', background: '#121111', padding: '0.5rem' }}>
{`// ❌ BEFORE HOOKS (Class Component - Complex)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  increment() { this.setState({ count: this.state.count + 1 }); }
  render() { return <button onClick={this.increment}>{this.state.count}</button>; }
}

// ✅ AFTER HOOKS (Functional Component - Simple)
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};`}
          </pre>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 2: useState HOOK (20 Marks Example) */}
      {/* ============================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2><Anchor size={22} /> 1. useState: Managing Local State</h2>
        
        <p><strong>What it does:</strong> <code>useState</code> is the most fundamental hook that lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.</p>
        
        <div className="info-box" style={{ marginBottom: '1rem' }}>
          <strong>🎯 Syntax & Parameters:</strong>
          <pre><code>const [state, setState] = useState(initialValue);</code></pre>
          <ul>
            <li><strong>initialValue:</strong> Can be any data type (string, number, object, array, boolean)</li>
            <li><strong>state:</strong> The current state value (read-only)</li>
            <li><strong>setState:</strong> Function to update the state (triggers re-render)</li>
          </ul>
        </div>
        
        <CodeBlock 
          code={`// EXAMPLE 1: Simple Counter
// ============================================
const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

// EXAMPLE 2: Form Input with Multiple Fields
// ============================================
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: 0
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  return (
    <form>
      <input name="username" value={formData.username} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="password" type="password" value={formData.password} onChange={handleChange} />
      <input name="age" type="number" value={formData.age} onChange={handleChange} />
    </form>
  );
};

// EXAMPLE 3: Toggle with Boolean State
// ============================================
const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <p>The light is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

// EXAMPLE 4: Array State Management
// ============================================
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`}
        />
      </section>

      {/* ============================================ */}
      {/* SECTION 3: useEffect HOOK */}
      {/* ============================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2><Activity size={22} /> 2. useEffect: Handling Side Effects</h2>
        
        <p><strong>What it does:</strong> <code>useEffect</code> lets you perform side effects in functional components. Side effects are operations that interact with the outside world or modify something outside the component's scope.</p>
        
        <div className="info-box" style={{ marginBottom: '1rem' }}>
          <strong>🎯 Common Side Effects:</strong>
          <ul>
            <li>🌐 Fetching data from an API</li>
            <li>⏱️ Setting up timers or intervals</li>
            <li>📡 Subscribing to WebSockets or event listeners</li>
            <li>🛠️ Direct DOM manipulation</li>
            <li>💾 Reading/writing to localStorage</li>
            <li>📊 Logging or analytics</li>
          </ul>
        </div>
        
        <div className="info-box" style={{ borderLeftColor: 'var(--brand-accent)', marginBottom: '1rem' }}>
          <strong>The Dependency Array - When Does useEffect Run?</strong>
          <ul>
            <li><code>{"useEffect(() => { ... })"}</code> → Runs after EVERY render</li>
            <li><code>{"useEffect(() => { ... }, [])"}</code> → Runs ONLY ONCE (on mount)</li>
            <li><code>{"useEffect(() => { ... }, [count])"}</code> → Runs when 'count' changes</li>
            <li><code>{"useEffect(() => { ... return cleanup }, [])"}</code> → Cleanup on unmount</li>
          </ul>
        </div>
        
        <CodeBlock 
          code={`// EXAMPLE 1: Run Once on Component Mount (Data Fetching)
// ============================================
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // This runs only when component first mounts
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  }, []); // Empty array = run once
  
  if (loading) return <div>Loading...</div>;
  return <div>{user?.name}</div>;
};

// EXAMPLE 2: Run When Dependencies Change
// ============================================
const SearchResults = ({ searchTerm }) => {
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    // This runs every time 'searchTerm' changes
    console.log(\`Searching for: \${searchTerm}\`);
    
    const searchAPI = async () => {
      const response = await fetch(\`/api/search?q=\${searchTerm}\`);
      const data = await response.json();
      setResults(data);
    };
    
    if (searchTerm.length > 2) {
      searchAPI();
    }
  }, [searchTerm]); // Re-run when searchTerm changes
  
  return <div>{results.map(result => <div key={result.id}>{result.title}</div>)}</div>;
};

// EXAMPLE 3: Cleanup Function (Preventing Memory Leaks)
// ============================================
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // Set up timer
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    // Cleanup function - runs when component unmounts
    return () => {
      clearInterval(interval); // Prevent memory leak
      console.log('Timer cleaned up');
    };
  }, []); // Empty array = setup once, cleanup on unmount
  
  return <div>Timer: {seconds} seconds</div>;
};

// EXAMPLE 4: Multiple useEffect Hooks (Separate Concerns)
// ============================================
const Dashboard = () => {
  const [data, setData] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  // Effect 1: Fetch data
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  
  // Effect 2: Track online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  // Effect 3: Update document title
  useEffect(() => {
    document.title = \`Dashboard - \${isOnline ? 'Online' : 'Offline'}\`;
  }, [isOnline]);
  
  return <div>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</div>;
};`}
        />
      </section>

      {/* ============================================ */}
      {/* SECTION 4: useContext HOOK */}
      {/* ============================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2><Globe size={22} /> 3. useContext: Global State Access</h2>
        
        <p><strong>What it does:</strong> <code>useContext</code> provides a way to pass data through the component tree without having to pass props down manually at every level (avoiding "prop drilling").</p>
        
        <div className="info-box" style={{ marginBottom: '1rem' }}>
          <strong>🎯 When to Use Context:</strong>
          <ul>
            <li>🌓 Theme (dark/light mode)</li>
            <li>👤 User authentication data</li>
            <li>🌐 Language/locale settings</li>
            <li>📱 Device type or screen size</li>
            <li>🎨 UI preferences</li>
          </ul>
        </div>
        
        <CodeBlock 
          code={`// STEP 1: Create a Context
// ============================================
const ThemeContext = createContext('light');
const UserContext = createContext(null);
const LanguageContext = createContext('en');

// STEP 2: Provide the Context (in App.jsx or parent component)
// ============================================
const App = () => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'John', loggedIn: true });
  const [language, setLanguage] = useState('en');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <MainComponent />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

// STEP 3: Consume the Context in Any Component
// ============================================
const MainComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const user = useContext(UserContext);
  const language = useContext(LanguageContext);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h2>Welcome, {user.name}!</h2>
      <p>Current language: {language}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
};

// ADVANCED: Shopping Cart with Context
// ============================================
const CartContext = createContext();

// Provider Component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };
  
  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };
  
  const clearCart = () => setCart([]);
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Any component can access cart
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return <button onClick={() => addToCart(product)}>Add to Cart</button>;
};

const CartSummary = () => {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  return (
    <div>
      <h3>Cart Items: {cart.length}</h3>
      <p>Total: \${total}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};`}
        />
      </section>

      {/* ============================================ */}
      {/* SECTION 5: 6 Additional Hooks (20 Marks) */}
      {/* ============================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2><TrendingUp size={22} /> 4. Additional 6 Essential Hooks (20 Marks Answer)</h2>
        
        {/* Hook 4: useReducer */}
        <div style={{ marginBottom: '2rem', borderBottom: '2px solid #e0e0e0', paddingBottom: '1rem' }}>
          <h3><Zap size={18} /> 4. useReducer - Complex State Management</h3>
          <p><strong>What it does:</strong> An alternative to <code>useState</code> for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one. It's similar to Redux reducers.</p>
          
          <CodeBlock 
            code={`// Counter with useReducer (instead of useState)
// ============================================
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'set':
      return { count: action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'set', payload: 100 })}>Set to 100</button>
    </div>
  );
};

// TODO App with useReducer (Complex State)
// ============================================
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => {
        dispatch({ type: 'ADD_TODO', payload: input });
        setInput('');
      }}>Add</button>
      
      {todos.map(todo => (
        <div key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
            Toggle
          </button>
          <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
            Delete
          </button>
        </div>
      ))}
      
      <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
        Clear Completed
      </button>
    </div>
  );
};`}
          />
        </div>
        
        {/* Hook 5: useRef */}
        <div style={{ marginBottom: '2rem', borderBottom: '2px solid #e0e0e0', paddingBottom: '1rem' }}>
          <h3><Save size={18} /> 5. useRef - Accessing DOM Elements & Persistent Values</h3>
          <p><strong>What it does:</strong> <code>useRef</code> returns a mutable object that persists for the entire lifetime of the component. It can be used to access DOM elements directly or store values that don't cause re-renders when changed.</p>
          
          <CodeBlock 
            code={`// EXAMPLE 1: Focusing an Input Field
// ============================================
const SearchInput = () => {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus(); // Direct DOM access
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

// EXAMPLE 2: Tracking Previous State Value
// ============================================
const CounterWithPrevious = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count; // Store previous value
  }, [count]);
  
  const prevCount = prevCountRef.current;
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// EXAMPLE 3: Measuring DOM Elements (Size/Dimensions)
// ============================================
const ResizableBox = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const boxRef = useRef(null);
  
  useEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);
  
  return (
    <div>
      <div ref={boxRef} style={{ width: '300px', height: '200px', background: '#e0e0e0', padding: '1rem' }}>
        Resize me!
      </div>
      <p>Width: {dimensions.width}px, Height: {dimensions.height}px</p>
    </div>
  );
};

// EXAMPLE 4: Stopwatch with useRef (Storing interval ID)
// ============================================
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  
  const startTimer = () => {
    if (intervalRef.current) return; // Already running
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };
  
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };
  
  return (
    <div>
      <h2>Stopwatch: {time}s</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};`}
          />
        </div>
        
        {/* Hook 6: useCallback */}
        <div style={{ marginBottom: '2rem', borderBottom: '2px solid #e0e0e0', paddingBottom: '1rem' }}>
          <h3><RefreshCw size={18} /> 6. useCallback - Memoizing Functions</h3>
          <p><strong>What it does:</strong> <code>useCallback</code> returns a memoized version of a function that only changes if dependencies change. It prevents unnecessary re-renders when passing callbacks to child components.</p>
          
          <CodeBlock 
            code={`// Parent Component
// ============================================
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState('');
  
  // WITHOUT useCallback: This function is recreated on every render
  const handleClickWithoutMemo = () => {
    console.log('Button clicked');
  };
  
  // WITH useCallback: Function is memoized
  const handleClickMemoized = useCallback(() => {
    console.log('Button clicked, count:', count);
  }, [count]); // Only recreate when 'count' changes
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <ExpensiveChild onClick={handleClickMemoized} />
    </div>
  );
};

// Child Component that should avoid unnecessary re-renders
const ExpensiveChild = React.memo(({ onClick }) => {
  console.log('Child re-rendered');
  return <button onClick={onClick}>Click Me</button>;
});

// Real-world: Search with Debounce
// ============================================
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  
  const performSearch = useCallback(async (term) => {
    if (term.length < 2) return;
    const response = await fetch(\`/api/search?q=\${term}\`);
    const data = await response.json();
    setResults(data);
  }, []); // performSearch never changes
  
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(searchTerm);
    }, 500);
    
    return () => clearTimeout(debounceTimer);
  }, [searchTerm, performSearch]);
  
  return (
    <div>
      <input onChange={(e) => setSearchTerm(e.target.value)} />
      {results.map(r => <div key={r.id}>{r.title}</div>)}
    </div>
  );
};`}
          />
        </div>
        
        {/* Hook 7: useMemo */}
        <div style={{ marginBottom: '2rem', borderBottom: '2px solid #e0e0e0', paddingBottom: '1rem' }}>
          <h3><Eye size={18} /> 7. useMemo - Memoizing Expensive Calculations</h3>
          <p><strong>What it does:</strong> <code>useMemo</code> memoizes the result of an expensive calculation and only recomputes when dependencies change. It improves performance by avoiding unnecessary computations.</p>
          
          <CodeBlock 
            code={`// EXAMPLE 1: Filtering Large Lists
// ============================================
const ProductList = ({ products, filterCategory, sortByPrice }) => {
  // WITHOUT useMemo: Recalculates on every render (slow)
  const filteredProductsSlow = products
    .filter(p => p.category === filterCategory)
    .sort((a, b) => a.price - b.price);
  
  // WITH useMemo: Only recalculates when dependencies change
  const filteredProductsFast = useMemo(() => {
    console.log('Recomputing filtered list...');
    return products
      .filter(p => p.category === filterCategory)
      .sort((a, b) => sortByPrice ? a.price - b.price : b.price - a.price);
  }, [products, filterCategory, sortByPrice]); // Re-run only when these change
  
  return (
    <div>
      {filteredProductsFast.map(product => (
        <div key={product.id}>{product.name} - \${product.price}</div>
      ))}
    </div>
  );
};

// EXAMPLE 2: Expensive Calculation (Fibonacci)
// ============================================
const FibonacciCalculator = ({ number }) => {
  const fibonacci = (n) => {
    console.log('Calculating Fibonacci...');
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  
  // Memoize the expensive calculation
  const result = useMemo(() => fibonacci(number), [number]);
  
  return (
    <div>
      <p>Fibonacci of {number} is {result}</p>
    </div>
  );
};

// EXAMPLE 3: Data Transformation
// ============================================
const AnalyticsDashboard = ({ rawData }) => {
  const statistics = useMemo(() => {
    console.log('Computing statistics...');
    const sum = rawData.reduce((acc, val) => acc + val, 0);
    const avg = sum / rawData.length;
    const min = Math.min(...rawData);
    const max = Math.max(...rawData);
    
    return { sum, avg, min, max };
  }, [rawData]); // Only recompute when rawData changes
  
  return (
    <div>
      <p>Average: {statistics.avg}</p>
      <p>Total: {statistics.sum}</p>
      <p>Range: {statistics.min} - {statistics.max}</p>
    </div>
  );
};`}
          />
        </div>
        
        {/* Hook 8: useLayoutEffect */}
        <div style={{ marginBottom: '2rem', borderBottom: '2px solid #e0e0e0', paddingBottom: '1rem' }}>
          <h3><Clock size={18} /> 8. useLayoutEffect - Synchronous DOM Mutations</h3>
          <p><strong>What it does:</strong> Similar to <code>useEffect</code>, but fires <strong>synchronously</strong> after all DOM mutations but before the browser paints. Use it when you need to read DOM layout and synchronously re-render.</p>
          
          <CodeBlock 
            code={`// Key Difference: useEffect vs useLayoutEffect
// ============================================
const EffectComparison = () => {
  useEffect(() => {
    console.log('useEffect: Runs AFTER browser paint');
  });
  
  useLayoutEffect(() => {
    console.log('useLayoutEffect: Runs BEFORE browser paint');
  });
  
  return <div>Check console for timing</div>;
};

// Real-world: Measuring and adjusting DOM elements
// ============================================
const Tooltip = ({ text, targetRef }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  
  useLayoutEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      // Calculate position BEFORE browser paints
      setTooltipPosition({
        top: rect.top - 30,
        left: rect.left + rect.width / 2
      });
    }
  }, [targetRef]);
  
  return (
    <div style={{ position: 'absolute', ...tooltipPosition }}>
      {text}
    </div>
  );
};

// Preventing visual flicker
// ============================================
const FlickerFreeComponent = () => {
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);
  
  // useLayoutEffect prevents flicker by measuring before paint
  useLayoutEffect(() => {
    if (divRef.current) {
      const { height } = divRef.current.getBoundingClientRect();
      setHeight(height);
    }
  }, []);
  
  return <div ref={divRef}>Height: {height}px</div>;
};`}
          />
        </div>
        
        {/* Hook 9: useImperativeHandle */}
        <div style={{ marginBottom: '2rem' }}>
          <h3><CheckSquare size={18} /> 9. useImperativeHandle - Customizing Ref Exposed Values</h3>
          <p><strong>What it does:</strong> <code>useImperativeHandle</code> customizes the instance value that is exposed when using <code>ref</code> with a component. It gives parent components controlled access to child component methods.</p>
          
          <CodeBlock 
            code={`// Child Component
// ============================================
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  
  // Expose specific methods to parent components
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    },
    getValue: () => {
      return inputRef.current.value;
    },
    setError: () => {
      inputRef.current.style.border = '2px solid red';
    }
  }));
  
  return <input ref={inputRef} {...props} />;
});

// Parent Component using the ref methods
// ============================================
const Form = () => {
  const inputRef = useRef(null);
  
  const handleSubmit = () => {
    const value = inputRef.current.getValue();
    if (!value) {
      inputRef.current.setError();
      alert('Please enter a value');
    } else {
      console.log('Submitted:', value);
      inputRef.current.clear();
    }
  };
  
  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Enter something..." />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

// Video Player Example
// ============================================
const VideoPlayer = forwardRef(({ src }, ref) => {
  const videoRef = useRef(null);
  
  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    stop: () => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    },
    setVolume: (volume) => {
      videoRef.current.volume = volume;
    }
  }));
  
  return <video ref={videoRef} src={src} />;
});

const VideoControls = () => {
  const videoRef = useRef(null);
  
  return (
    <div>
      <VideoPlayer ref={videoRef} src="/video.mp4" />
      <button onClick={() => videoRef.current.play()}>Play</button>
      <button onClick={() => videoRef.current.pause()}>Pause</button>
      <button onClick={() => videoRef.current.stop()}>Stop</button>
      <button onClick={() => videoRef.current.setVolume(0.5)}>50% Volume</button>
    </div>
  );
};`}
          />
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: CUSTOM HOOKS - Creating Your Own */}
      {/* ============================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2><RefreshCw size={22} /> 5. Custom Hooks - Reusing Logic Across Components</h2>
        
        <p><strong>What are Custom Hooks?</strong> Custom hooks are JavaScript functions whose names start with "use" and can call other hooks. They let you extract component logic into reusable functions.</p>
        
        <CodeBlock 
          code={`// CUSTOM HOOK 1: useLocalStorage
// ============================================
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage:
const SettingsPage = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [notifications, setNotifications] = useLocalStorage('notifications', true);
  
  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
    </div>
  );
};

// CUSTOM HOOK 2: useWindowSize
// ============================================
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}

// Usage:
const ResponsiveComponent = () => {
  const { width, height } = useWindowSize();
  const isMobile = width < 768;
  
  return <div>Screen: {width}x{height} - {isMobile ? 'Mobile View' : 'Desktop View'}</div>;
};

// CUSTOM HOOK 3: useFetch
// ============================================
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage:
const UserList = () => {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users?.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

// CUSTOM HOOK 4: useToggle
// ============================================
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  
  return { value, toggle, setTrue, setFalse };
}

// Usage:
const Modal = () => {
  const { value: isOpen, toggle, setFalse: closeModal } = useToggle(false);
  
  return (
    <div>
      <button onClick={toggle}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <p>Modal Content</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};`}
        />
      </section>

      {/* ============================================ */}
      {/* SECTION 7: RULES OF HOOKS (Critical!) */}
      {/* ============================================ */}
      <div className="warning-box" style={{ marginBottom: '2rem' }}>
        <strong>⚠️ The Two Golden Rules of Hooks (Must Follow!):</strong>
        
        <ol style={{ marginTop: '1rem' }}>
          <li><strong>Only call Hooks at the Top Level:</strong> Don't call Hooks inside loops, conditions, or nested functions. This ensures Hooks are called in the same order each time a component renders.</li>
          <li><strong>Only call Hooks from React Functions:</strong> Call them from React function components or custom Hooks. Never call them from regular JavaScript functions.</li>
        </ol>
        
        <div className="warning-box" style={{ marginTop: '1rem' }}>
          <strong>❌ WRONG - Conditional Hook Call:</strong>
          <pre>{`if (condition) {
  useState(false); // ❌ Bad! Hook called conditionally
}`}</pre>
          
          <strong>✅ CORRECT - Move condition inside Hook:</strong>
          <pre>{`const [value, setValue] = useState(condition ? true : false); // ✅ Good!`}</pre>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 8: COMPLETE COMPARISON TABLE */}
      {/* ============================================ */}
      <div style={{ marginBottom: '3rem', overflowX: 'auto' }}>
        <h2><CheckSquare size={22} /> 6. Hooks Comparison Table</h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#040303' }}>
          <thead style={{ background: '#667eea', color: 'white' }}>
            <tr><th style={{ padding: '12px', border: '1px solid #ddd' }}>Hook</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Purpose</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}><code>useState</code></td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Local state management</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Always - for any changing data</td></tr>
            <tr style={{ background: '#483737' }}><td style={{ padding: '8px', border: '1px solid #ddd' }}><code>useEffect</code></td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Side effects</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>API calls, timers, subscriptions</td></tr>
            <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}><code>useContext</code></td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Global state</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Theme, auth, language, preferences</td></tr>
            <tr style={{ background: '#483737' }}><td style={{ padding: '8px', border: '1px solid #ddd' }}><code>useReducer</code></td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Complex state logic</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Multiple sub-values, next state depends on previous</td></tr>
            <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}><code>useRef</code></td><td style={{ padding: '8px', border: '1px solid #ddd' }}>DOM access, mutable values</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Focusing inputs, storing interval IDs</td></tr>
            <tr style={{ background: '#483737' }}><td style={{ padding: '8px', border: '1px solid #ddd' }}><code>useCallback</code></td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Memoize functions</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Preventing unnecessary child re-renders</td></tr>
            <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}><code>useMemo</code></td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Memoize values</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Expensive calculations, data transformations</td></tr>
            <tr style={{ background: '#483737' }}><td style={{ padding: '8px', border: '1px solid #ddd' }}><code>useLayoutEffect</code></td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Synchronous DOM updates</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Measuring DOM, preventing flicker</td></tr>
            <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}><code>useImperativeHandle</code></td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Custom ref methods</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>Exposing specific child methods</td></tr>
          </tbody>
        </table>
      </div>

      {/* ============================================ */}
      {/* VIDEO SECTION */}
      {/* ============================================ */}
      <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PlayCircle color="#FF0000" /> 🎥 Watch: Complete React Hooks Tutorial
        </h3>
        
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginTop: '1rem' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src="https://www.youtube.com/embed/TNhaISOUy6Q" 
            title="React Hooks Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="info-box" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <a 
            href="https://www.youtube.com/watch?v=LOHl1-MP_9k" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}
          >
            🎬 Also watch this 12-minute quick overview of all React Hooks on YouTube!
          </a>
        </div>
      </div>

      {/* ============================================ */}
      {/* SUMMARY CHEATSHEET */}
      {/* ============================================ */}
      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))', borderRadius: 'var(--radius-lg)', color: '#fff' }}>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>📋 Quick Reference: Hooks Summary</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div>
            <strong>🎯 Most Common Hooks (95% of use cases):</strong>
            <ul style={{ marginTop: '0.5rem' }}>
              <li><code>useState</code> - Local state</li>
              <li><code>useEffect</code> - Side effects</li>
              <li><code>useContext</code> - Global state</li>
              <li><code>useRef</code> - DOM references</li>
            </ul>
          </div>
          
          <div>
            <strong>⚡ Performance Hooks:</strong>
            <ul style={{ marginTop: '0.5rem' }}>
              <li><code>useCallback</code> - Memoize functions</li>
              <li><code>useMemo</code> - Memoize values</li>
              <li><code>useReducer</code> - Complex state</li>
            </ul>
          </div>
          
          <div>
            <strong>🔧 Advanced Hooks:</strong>
            <ul style={{ marginTop: '0.5rem' }}>
              <li><code>useLayoutEffect</code> - Sync DOM updates</li>
              <li><code>useImperativeHandle</code> - Custom refs</li>
              <li>Custom Hooks - Reusable logic</li>
            </ul>
          </div>
        </div>
        
        <div className="info-box" style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
          <strong>💡 Pro Tips:</strong>
          <ul style={{ marginTop: '0.5rem' }}>
            <li>Always use the <strong>ESLint plugin (eslint-plugin-react-hooks)</strong> to enforce Hook rules</li>
            <li>Start with <code>useState</code> and <code>useEffect</code>, learn others as needed</li>
            <li>Extract repeated logic into <strong>Custom Hooks</strong></li>
            <li>Use <code>useCallback</code> and <code>useMemo</code> only when you measure performance issues</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Hooks;