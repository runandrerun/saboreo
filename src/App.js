import React, {useEffect} from 'react';
import {fetchWhiskeys} from './adapters';

export default function App() {
  useEffect(() => {
    fetchWhiskeys()
    .then(data => console.log(data))
  });

  return (
    <div className="App">
    </div>
  );
};
