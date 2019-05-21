<?php

namespace App\Validates;

use App\Rules\Timestamp;
use Illuminate\Support\Facades\Validator;

class  VipValidate extends Validate
{
    protected $message = '操作成功';
    protected $data    = [];


    public function storeValidate($request_data)
    {
        $rules         = [
            'started_at' => ['required', new Timestamp()],
            'expired_at' => ['required', new Timestamp()],
            'user_id' => ['required', 'integer'],
        ];
        $rest_validate = $this->validate($request_data, $rules);
        if ($rest_validate === true) {
            if ($request_data['expired_at'] <= time()) {
                return $this->baseFailed('有效期不能小于当前时间');
            }
            return $this->baseSucceed($this->data, $this->message);
        } else {
            $this->message = $rest_validate;
            return $this->baseFailed($this->message);
        }

    }

    public function updateValidate($request_data)
    {
        $rules         = [
            'started_at' => ['required', new Timestamp()],
            'expired_at' => ['required', new Timestamp()],
            'user_id' => ['required', 'integer'],
        ];
        $rest_validate = $this->validate($request_data, $rules);
        if ($rest_validate === true) {
            if ($request_data['expired_at'] <= time()) {
                return $this->baseFailed('有效期不能小于当前时间');
            }
            return $this->baseSucceed($this->data, $this->message);
        } else {
            $this->message = $rest_validate;
            return $this->baseFailed($this->message);
        }

    }

    protected function validate($request_data, $rules)
    {
        $message   = [
            'started_at.required' => '开始时间不能为空',
            'expired_at.required' => '有效期不能为空',
            'user_id.required' => '未选择用户',
        ];
        $validator = Validator::make($request_data, $rules, $message);
        if ($validator->fails()) {
            return $validator->errors()->first();
        }
        return true;
    }
}
