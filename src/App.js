import React from 'react';
import './styles/main.css';

function App() {
    return (
        <div className="center">
            <p>Hello World</p>
            <p>We are using node version {process.versions.node}</p>
            <p>electron version {process.versions.electron}</p>
            <p>chrome version {process.versions.chrome}</p>
        </div>
    );
}

export default App;