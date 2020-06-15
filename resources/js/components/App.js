import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

//My implementations
import GridCard from './gridCard';
import Nav from './nav';

const typeList = {
    allBooks: 1,
    userBooks: 2,
    loanBooks: 3
}

const MySpinner = (props) => (
    <div className="text-center w-100">
        <div className="spinner-border spinner-border-lg text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

async function getBooksApi(type){
    let response;
    try{
        switch (type) {
            case typeList.allBooks:
                response = await axios.get('/book');
                break;
            case typeList.userBooks:
                response = await axios.get('/user/book');
                break;
            case typeList.loanBooks:
                response = await axios.get('/user/loan');
                break;
            default:
                break;
        }

        return response.data.books;
    }
    catch(error) {
        console.log(error);
    }
}

export default function App (props) {
    const [books, setBooks] = useState(null);

    function updateBooks() {
        getBooksApi(props.typeList)
            .then( (res) => {
                setBooks(res);
            })
            .catch( (err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        setInterval( updateBooks , 5000);
    }, []);

    return (
    <div className="ViewBooks w-100">
        <div className="row w-100 h-100">
            <div className="col-sm-12 col-md-4 col-lg-2">
                <Nav/>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-10">
                { (books === null) ?
                    (<MySpinner/>) :
                    (books.length > 0) ?
                        <GridCard books={books}/> :
                        <p>Nenhum livro encontrado</p>
                }
            </div>
        </div>
    </div>
    );
}


if (document.getElementById('allBooks'))
    ReactDOM.render(
        <App typeList={typeList.allBooks} />,
        document.getElementById('allBooks')
    );


if (document.getElementById('userBooks'))
    ReactDOM.render(
        <App typeList={typeList.userBooks} />,
        document.getElementById('userBooks')
    );


if (document.getElementById('loanBooks'))
    ReactDOM.render(
        <App typeList={typeList.loanBooks} />,
        document.getElementById('loanBooks')
    );
