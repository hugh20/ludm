<?php

namespace App\Http\Controllers\Api;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;


class RegisterController extends ApiController
{

    public function __construct()
    {
        $this->middleware('guest');
        $this->middleware('ip-filter')->only('register');
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function register(Request $request)
    {
        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            $res_msg = $validator->errors()->first();
            return $this->failed($res_msg);
        }

        if(!$this->create($request->all())){
            return $this->failed('注册失败');
        }

        return $this->success([]);
    }



    protected function validator(array $data)
    {
        return Validator::make($data, [
            'phone' => [
                'required',
                Rule::unique('users')->where(function ($query) {
                    return $query->where(['enable' => 'T']);
                })
            ],
            'password' => 'required|string|min:6',
            'checkPass' => 'required|string|same:password',
        ], [
            'phone.required' => '请输入账号',
            'password.required' => '请输入密码',
            'checkPass.required' => '请输入确认密码',
            'password.min' => '密码长度至少是6位',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['phone'],
            'phone' => $data['phone'],
            'password' => Hash::make($data['password']),
            'enable' => 'T',
        ]);
    }

}
