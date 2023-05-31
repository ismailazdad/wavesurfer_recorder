import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AudioRecorder from './component/AudioRecorder';


ReactDOM.render(
    <React.StrictMode>
        <div className="App">
            <AudioRecorder/>
        </div>
    </React.StrictMode>,
    document.getElementById('root'),
);

