import React from 'react';

//My implementations
import Card from './card';

const MyCard = (props) => (
    <div className="col-md-6 col-lg-3">
        <Card {...props} />
    </div>
);

export default class GridCard extends React.Component {

    generateView(){
        let books = [];
        for(let i=0; i < this.props.books.length; i++)
            books.push(<MyCard key={i} {...this.props.books[i]} />);
        return books;
    }

    render(){
        return (
            <div className="GridCard">
                <div className="container">
                    <div className="row">
                        { this.generateView() }
                    </div>
                </div>
            </div>
        );
    }
}