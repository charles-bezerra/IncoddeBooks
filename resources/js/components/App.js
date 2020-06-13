import React from 'react';
import ReactDOM from 'react-dom';

//My implementations
import GridCard from './gridCard';
import Nav from './nav';
import { MySpinner } from './spinner'

const typeList = {
    allBooks: 1,
    userBooks: 2,
    loanBooks: 3
}

async function callApi(type){
    let response;
    try{
        switch (type) {
            case typeList.allBooks:
                response = await fetch('/books');
                break;

            case typeList.userBooks:
                response = await fetch('/books/1');
                break;

            case typeList.loanBooks:
                response = await fetch('/loans/1');
                break;

            default:
                break;
        }

        const json = await response.json();

        if(json.books)
            return json.books;
        else
            return [];
    }
    catch(error) {
        console.log(error);
    }
}

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        setInterval(
        () => {

        callApi(this.props.typeList)
            .then( response => this.setState({ books: response })  )
            .catch( error => console.log(error)  );

        }, 4000);
    }

    render(){
        return (
            <div className="ViewBooks w-100">
                <div className="row w-100">
                    <div className="col-sm-12 col-md-4 col-lg-2">
                        <Nav/>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-10">
                        <GridCard books={this.state.books}/>
                    </div>
                </div>
            </div>
        );
    }
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
