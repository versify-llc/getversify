import React from 'react';
import { clsx } from 'clsx';
import './Snackbar.css';

type SnackbarProps = {
    show: boolean,
    message: string
}

const Snackbar = ({ show, message }: SnackbarProps) => {
    return (
        <div id="snackbar" className={clsx('text-white text-center f3 py-3 px-4', show && 'show')}>
            {message}
        </div>
    );
}

export default Snackbar
