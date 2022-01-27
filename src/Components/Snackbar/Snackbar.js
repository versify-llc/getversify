import React from 'react';
import './Snackbar.css';

function Snackbar(props) {
    return (
        <div id="snackbar" className={`text-white text-center f3 py-3 px-4 ${props.show ? 'show' : ''}`}>
            {props.message}
        </div>
    );
}

export default Snackbar;