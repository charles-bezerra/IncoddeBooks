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


Auth::routes();
Route::get('/', function () { return redirect('/home'); });
Route::get('/home', 'HomeController@index')->name('home');

Route::middleware('auth')->get('/home/user/books', function (){ return view('user.books'); });
Route::middleware('auth')->get('/home/user/loans', function (){ return view('user.loans'); });

Route::resource('user', 'UserController');
Route::get('/books/{id}', 'UserController@books');
Route::get('/loans/{id}', 'UserController@loans');

Route::resource('book', 'BookController');
Route::get('/books', 'BookController@all')->name('books');
Route::post('/book/store', 'BookController@store');

Route::resource('loan', 'LoanController');


