import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import UserProvider from './components/UserProvider';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript


root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
