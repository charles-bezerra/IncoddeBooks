import React from 'react';
import axios from "axios";

const ButtonCard = (props) => (
    props.free ?
    (<button className="btn btn-primary btn-sm btn-block" onClick={props.onClick}>Alugar</button>) :
    (<a href="#" className="btn btn-secondary btn-sm btn-block" disabled>Alocado</a>)

);

export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        axios
        .post("/loan", {id_book: this.props.id})
        .then((response) => {
            alert(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        const name = this.props.name;
        const details = this.props.details;

        return (
            <div className="card shadow rounded mt-5" style={{minWidth: '100%'}}>
                <img
                    src={ this.props.url_image }
                    className="card-img-top"
                    alt="Loading..."
                />

                <div className="card-body">
                    <h5 className="card-title">
                        <a href={"/home/book/" + this.props.id}>
                            { (name.length < 17) ? name : name.substring(0,16) + '...'}
                        </a>
                    </h5>

                    <p className="card-text text-justify">
                        { (details.length < 17) ?  details : details.substring(0,80) + '...' }
                    </p>

                    <hr/>

                    <ButtonCard
                        free={ this.props.free }
                        onClick={ this.onClick }
                    />
                </div>
            </div>
        );
    }
}
