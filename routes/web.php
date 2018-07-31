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

Route::get('/', function () {
    return view('factbook');
});

// Route::get('/test', function () {
//     return view('test');
// });

// Route::get('/product', function () {
//     return view('product');
// });

Route::get('/{any}', function ($any) {
    return view('factbook');
})->where('any', '.*');

// Route::get('/factbook/international', function () {
//     return view('factbook-international');
// });