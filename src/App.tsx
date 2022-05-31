import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');

  async function getData() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );

      if (!response.ok) {
        throw new Error(`The Error status is: ${response.status}`);
      }

      const json = await response.json();
      const title = json.title;

      return title;
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  }

  getData()
    .then((x) => setTitle(x))
    .catch((err) => console.log('error message :', err.message));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>Title fetched from https://jsonplaceholder is : "{title}"</p>
      </header>
    </div>
  );
}

export default App;
