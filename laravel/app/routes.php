<?php

	/*
	|--------------------------------------------------------------------------
	| Login 
	|--------------------------------------------------------------------------
	|
	|
	*/
	Route::get('login', ['as' => 'login', 'uses' => 'SessionsController@showLogin']);

	/*
	|--------------------------------------------------------------------------
	| All other areas require authentication
	|--------------------------------------------------------------------------
	|
	|
	*/
	Route::group(['before' => 'auth'], function()
	{
		/*
		|--------------------------------------------------------------------------
		| Dashboard
		|--------------------------------------------------------------------------
		|
		|
		*/
		Route::get('/', ['as' => 'home', 'uses' => 'HomeController@showDashboard']);
	});
