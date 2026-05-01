import React from 'react';
import CodeBlock from '../components/CodeBlock';
import { PlayCircle } from 'lucide-react';

const ES6Fundamentals = () => {
  return (
    <div className="page-content animation-fade-in">
      <div className="page-header">
        <h1 className="page-title">📦 ES6 Fundamentals for React (Super Simple Guide)</h1>
        <div className="page-badge">Learn Like You're 10 🚀</div>
      </div>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Think of JavaScript like a toolbox 🧰. ES6 added a bunch of NEW and COOL tools
        that make building things (like React apps) much easier and faster.
        
        In this guide, we will explain everything in a super simple way — like a story!
      </p>

      {/* 1. Classes */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>1. Classes (Blueprints 🏗️)</h2>
        <p>
          Imagine you want to build many toy cars 🚗.
          Instead of building each one from scratch, you create a <strong>blueprint</strong>.
        </p>
        <p>
          A <strong>class</strong> is that blueprint. It tells JavaScript how to create objects.
        </p>

        <CodeBlock
          code={`class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}`}
        />

        <p>
          👉 <strong>constructor</strong> is like the setup function.
          It runs when we create a new object.
        </p>

        <p>
          👉 <strong>this.brand</strong> means "this car's brand".
        </p>

        <p>
          We can also <strong>inherit</strong> (copy features) from another class:
        </p>

        <CodeBlock
          code={`class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ', it is a ' + this.model;
  }
}`}
        />

        <p>
          👉 <strong>extends</strong> means "copy from another class"
        </p>
        <p>
          👉 <strong>super()</strong> calls the parent class
        </p>
      </section>

      {/* 2. Arrow Functions */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>2. Arrow Functions (Shortcuts ⚡)</h2>
        <p>
          Arrow functions are just a shorter way to write functions.
        </p>

        <CodeBlock
          code={`// Old way
function hello() {
  return "Hello World!";
}

// New way
const hello = () => "Hello World!";`}
        />

        <p>
          👉 They are shorter and cleaner ✨
        </p>

        <p>
          👉 VERY IMPORTANT: Arrow functions do NOT create their own <code>this</code>.
        </p>

        <p>
          Think of <code>this</code> like "who owns this code".
        </p>
      </section>

      {/* 3. Variables */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>3. Variables (Boxes 📦)</h2>
        <p>
          Variables are like boxes where we store things.
        </p>

        <p><strong>let</strong> → You can change what's inside the box.</p>
        <p><strong>const</strong> → You CANNOT replace the box.</p>

        <CodeBlock
          code={`let age = 10;
age = 11; // ✅ allowed

const name = "John";
name = "Mike"; // ❌ error`}
        />

        <p>
          👉 In React, we mostly use <strong>const</strong>
        </p>
      </section>

      {/* 4. Map */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>4. .map() (Magic Loop 🔁)</h2>
        <p>
          Imagine you have a list of fruits 🍎🍌🍊.
        </p>

        <p>
          <code>.map()</code> helps you do something to EVERY item.
        </p>

        <CodeBlock
          code={`const fruits = ['Apple', 'Banana', 'Orange'];

const list = fruits.map((fruit) => <p>{fruit}</p>);`}
        />

        <p>
          👉 React uses this to show lists on the screen.
        </p>
      </section>

      {/* 5. Destructuring */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>5. Destructuring (Unpacking 🎁)</h2>
        <p>
          Imagine opening a gift box 🎁 and taking out items.
        </p>

        <CodeBlock
          code={`const person = { name: 'John', age: 30 };

const { name, age } = person;`}
        />

        <p>
          👉 Instead of writing <code>person.name</code>, we just write <code>name</code>
        </p>
      </section>

      {/* 6. Spread */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>6. Spread Operator (... Clone Machine 🧬)</h2>
        <p>
          Spread copies things.
        </p>

        <CodeBlock
          code={`const a = [1, 2];
const b = [3, 4];

const c = [...a, ...b];`}
        />

        <p>
          👉 It merges arrays or objects easily.
        </p>
      </section>

      {/* 7. Modules */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>7. Modules (Splitting Files 📂)</h2>
        <p>
          Big programs are split into small files.
        </p>

        <CodeBlock
          code={`export const name = "John";

import { name } from './file';`}
        />

        <p>
          👉 <strong>export</strong> = share
          👉 <strong>import</strong> = use
        </p>
      </section>

      {/* 8. Ternary */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>8. Ternary Operator (Quick Decisions 🤔)</h2>
        <p>
          Like asking a yes/no question.
        </p>

        <CodeBlock
          code={`const isLoggedIn = true;

const message = isLoggedIn ? "Welcome" : "Please Login";`}
        />

        <p>
          👉 Short if/else
        </p>
      </section>

      {/* Video */}
      <div style={{ marginTop: '4rem', padding: '2rem', borderRadius: '16px' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PlayCircle color="#FF0000" /> Watch: ES6 for Beginners
        </h3>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/fGQkw7qrjyQ"
            title="ES6 Tutorial"
          />
        </div>
      </div>
    </div>
  );
};

export default ES6Fundamentals;
