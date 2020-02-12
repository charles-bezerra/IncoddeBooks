import React from "react";
import Modal from "./modal";

const Nav = (props) => (
    <div className="container">
        <ul className="nav flex-column">
            <li className="nav-item">
                <h5 className="nav-link">Filtrar</h5>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/home">Todos livros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/home/user/books">Meus livros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/home/user/loans">Alocados por mim</a>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-primary ml-3 mt-2" data-toggle="modal" data-target="#exampleModal">Novo livro</button>
            </li>
        </ul>

        <Modal />
    </div>
);

export default Nav;