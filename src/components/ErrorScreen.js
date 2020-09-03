import React, { useState, Component } from 'react';
import './css/style.scss';
import Alert from '@material-ui/lab/Alert';


function ErrorScreen() {

    return (
        <Alert style={{ marginTop: 5, width: 270 }} severity="warning">ENTER A VALID NUMBER</Alert>
    );
}


export default ErrorScreen;
