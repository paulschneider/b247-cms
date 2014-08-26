<?php

Class SessionsController extends BaseController {

	public function showLogin()
	{
		return View::make('login.screen');
	}
}