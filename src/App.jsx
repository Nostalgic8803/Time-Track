import React from 'react';
import TimeTracker from './Components/TimeTracker';

const App = () => {
  const employees = ['Jasper', 'Jordan' , 'Jesper'];

  return (
    <div className="App">
      <div className="logo">
        <h1>Ellry Cafe</h1>
        <iconify-icon icon="simple-icons:buymeacoffee"></iconify-icon>
      </div>
      <TimeTracker employees={employees} />
    </div>
  );
};

export default App;