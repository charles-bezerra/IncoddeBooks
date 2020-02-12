import React from 'react';
import axios from 'axios';

export default class Modal extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: '',
            url_image: '',
            details: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit (e) {  
        e.preventDefault();

        let submit = {
            name: this.state.name,
            url_image: this.state.url_image,
            details: this.state.details
        };

        axios
            .post(
                '/book/store', 
                submit
            )
            .then(response => {
                if( response.data.success )
                    alert('Cadastro realizado com sucesso!');
                else
                    alert('Não foi possível cadastrar seu livro!');
            })
            .catch(error => {
                console.log(error.response.data.message); 
            });
    }

    render(){
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Novo livro</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={ this.handleSubmit }>    
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" value={this.state.name} className="form-control" placeholder="Nome do livro" required="required" name="name" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Imagem (url)</label>
                                <input type="text" value={this.state.url_image} className="form-control" id="exampleFormControlInput1" placeholder="URL" required="required" name="url_image" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Descrição</label>
                                <textarea value={this.state.details} className="form-control" id="exampleFormControlTextarea1" rows="3" required="required" name="details" onChange={this.handleChange}></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                <input type="submit" className="btn btn-primary" value="Cadastrar"/>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}