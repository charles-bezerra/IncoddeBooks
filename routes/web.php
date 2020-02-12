<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 
    function () { 
        return redirect('/home'); 
    }
);

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home/user/books', function (){
    if (Auth::check())
        return view('user.books');
    return view('auth.login');}
);
Route::get('/home/user/loans', function (){
    if (Auth::check())
        return view('user.loans');
    return view('auth.login');}
);

Route::resource('user', 'UserController');
Route::resource('book', 'BookController');
Route::resource('loan', 'LoanController');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/books', 'BookController@all')->name('books');

Route::get('/user/books', 'UserController@books')->name('user.books');
Route::get('/user/loans', 'UserController@loans')->name('user.loans');

Route::post('/book/store', 'BookController@store');
