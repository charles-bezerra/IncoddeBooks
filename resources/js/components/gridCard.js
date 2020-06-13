import React from 'react';

//My implementations
import Card from './card';

const MyCard = (props) => (
    <div className="col-md-6 col-lg-3">
        <Card {...props} />
    </div>
);

export default function GridCard (props) {
    return (
    <div className="GridCard">
        <div className="container">
            <div className="row">
            { props.books.map( (e, i) => <MyCard key={i} {...e} /> ) }
            </div>
        </div>
    </div>
    );
}
