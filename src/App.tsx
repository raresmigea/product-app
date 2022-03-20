import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductContainer from './components/product-container';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and aaaaa to reload.
        </p>
        <ProductContainer />
      </header>
    </div>
  );
}

export default App;
