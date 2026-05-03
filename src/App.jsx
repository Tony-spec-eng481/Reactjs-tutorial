import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Introduction from './pages/Introduction';
import Installation from './pages/Installation';
import ES6 from './pages/ES6';
import JSX from './pages/JSXreact';
import ComponentsPage from './pages/ComponentsPage';
import Functions from './pages/Functions';
import Hooks from './pages/Hooks';
import GenericPage from './pages/GenericPage';

// Import global styles
import './styles/global.css';

function App() {
  return (
    <Router basename="/Reactjs-tutorial/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduction />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="installation" element={<Installation />} />
          <Route path="ES6" element={<ES6 />} />
          <Route path="jsx" element={<JSX />} />
          <Route path="functions-jsx" element={<Functions />} />
          <Route path="jsx-in-depth" element={<GenericPage title="JSX in Depth" emoji="📐" />} />
          <Route path="state" element={<GenericPage title="State Management" emoji="📊" description="State is data that changes over time. React components can have internal state using the useState hook." />} />
          <Route path="props" element={<GenericPage title="Props" emoji="📤" />} />
          <Route path="events" element={<GenericPage title="Event Handling" emoji="🎯" />} />
          <Route path="lists" element={<GenericPage title="Lists & Keys" emoji="📋" />} />
          <Route path="conditional" element={<GenericPage title="Conditional Rendering" emoji="⚠️" />} />
          <Route path="*" element={<GenericPage title="Page Not Found" emoji="404" description="The page you are looking for does not exist." />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
