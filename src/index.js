import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GameContextprovider } from './components/GameContext/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GameContextprovider>
    <App />
  </GameContextprovider>
);

