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

//Routes Views
Route::get('/home/book/{id}', "BookController@index");
Route::middleware('auth')->get('/home/user/books', function (){ return view('user.books'); });
Route::middleware('auth')->get('/home/user/loans', function (){ return view('user.loans'); });

//Routes responses
Route::get('/user/book', 'UserController@books');
Route::get('/user/loan', 'UserController@loans');

Route::get('/book', 'BookController@all');
Route::post('/book', 'BookController@store');

Route::post('/loan', 'LoanController@store');



