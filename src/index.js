import React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

let meta = document.createElement('meta');
meta.httpEquiv = 'Content-Security-Policy';
meta.content = "script-src 'self' 'unsafe-inline';";
document.head.appendChild(meta);

render(<App />, document.getElementById('root'));