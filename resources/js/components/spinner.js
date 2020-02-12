import React from 'react';

export const MySpinner = (props) => (
    <div className="w-100" style={{height: '150px'}}>
        <div className="spinner-border-lg text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>    
    </div>
);