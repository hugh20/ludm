<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Auth;

class UserController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
//        $this->middleware('passport-administrators');
        $this->middleware('auth:api');
    }


    public function currentUser()
    {
        $authUser = Auth::user();
        $return = $authUser->toArray();

        return $this->success($return);
    }
}
