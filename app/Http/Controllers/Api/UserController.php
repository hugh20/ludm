<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Vip;
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
        $time = date('Y-m-d');
        $vip = Vip::where('user_id', $return['id'])->where('started_at', '<', $time)
            ->where('expired_at', '>', $time)->first();
        $return['vip'] = $vip ? true : false;
        return $this->success($return);
    }
}
