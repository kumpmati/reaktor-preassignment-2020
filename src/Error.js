import React from 'react';

function Error(props) {
    return (
        <div>
            <a id='backbutton' href='./'>Back to package view</a>
            <h1>Error: {props.data.message}</h1>
        </div>
    );
}

export default Error;