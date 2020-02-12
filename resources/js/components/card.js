import React from 'react';

const ButtonCard = (props) => (                
    props.free ? 
    (<button className="btn btn-primary btn-block" onClick={props.onClick}>Alugar</button>) :
    (<a href="#" className="btn btn-secondary btn-block" disabled>Alocado</a>)

);

export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        alert('oi');
    }

    render(){
        return (
            <div className="card shadow-sm rounded mt-3" style={{width: '16rem'}}>
                <img 
                    src={ this.props.url_image } 
                    className="card-img-top" 
                    alt="Loading..."
                />
                <div className="card-body">
                    <h5 className="card-title">
                        <a href={"/books/" + this.props.id}>
                            { this.props.name.substring(0,16) + '...' }
                        </a>
                    </h5>
                    <p className="card-text">
                        { this.props.details.substring(0,100) + '...' }
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