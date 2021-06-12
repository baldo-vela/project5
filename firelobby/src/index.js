import 'bulma/css/bulma.css';

import React from 'react';
import { createRoot } from 'react-dom';

import {FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  //retrieved from firebase console
}

function App() {
  return <div>Hello World!</div>;
}
createRoot(document.getElementById('root')).render(<App />);
