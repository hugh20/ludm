<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\CommonCollection;
use App\Http\Resources\UserResource;
use App\Validates\UserValidate;
use App\Models\Vip;
use App\Models\User;
use App\Validates\VipValidate;
use Illuminate\Http\Request;
use Auth;

class VipController extends AdminController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api');
    }

    public function store(Request $request, Vip $model, VipValidate $validate)
    {
        $request_data = $request->all();

        $rest_validate = $validate->storeValidate($request_data);

        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);

        $res = $model->storeAction($request_data);
        if ($res['status'] === true) return $this->message($res['message']);
        return $this->failed($res['message']);

    }
}
