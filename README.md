# IncoddeBooks

<p>O projeto consiste em um site que é possível se cadastrar, cadastrar seu livro e alocar livros de outras pessoas</p>

## Tecnológias usadas 

<ul>
    <li>PHP 7</li>
    <li>Laravel 6</li>
    <li>ReactJS</li>
    <li>Axios</li>
    <li>Bootstrap 4</li>
    <li>MySQL</li>
</ul>

## Guia de instalação

### Na pasta do projeto

Configurar o banco de dados, usuario e host na pasta <b>.env</b>
e <b>config/database.php</b>.

### Abra o mysql e crie o database

> create database incoddeBooks;

### Terminal (pasta do projeto) 

<p> Digitar os seguintes comandos:</p>


<small>Instalando as dependências do composer e nodejs</small>

> composer install && npm install

<small>Build app react para desenvolvimento</small>

> npm run dev

<small>ou para produção</small>

> npm run prod

<small>Realizar a migração do banco de dados:</small>

> php artisan migrate --seed
