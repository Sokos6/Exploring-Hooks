import React from 'react';
import './App.css';
import Button from './Button';
import DataLoader from './DataLoader';

function App() {
  return (
    <div className="App">
      <Button />
      <DataLoader
        render={data => {
          return (
            <div>
              <ul>
                {data.map(el => (
                  <li key={el.id}>{el.title}</li>
                ))}
              </ul>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
