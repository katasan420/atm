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

Route::get("index", "AtmController@index");
Route::get('createToken', 'AtmController@createToken');
Route::post('bankTrading/accountOpening', 'AtmController@accountOpen');
Route::get('bankTrading/{account_id}', 'AtmController@balanceReference');
Route::post('bankTrading/depositMoney/{account_id}', 'AtmController@deposit');
Route::post('bankTrading/withdrawal/{account_id}', 'AtmController@withdrawal');