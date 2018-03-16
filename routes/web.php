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

Route::get('/', 'RecyclePageController@index')->name('home');

Route::get('/why-ITAD', 'RecyclePageController@why');

Route::get('/about', 'RecyclePageController@about');

Route::get('/contact', 'RecyclePageController@contact');
