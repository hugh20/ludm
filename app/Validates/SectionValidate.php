<?php

namespace App\Validates;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use DB;

class  SectionValidate extends Validate
{
    protected $message = '操作成功';
    protected $data = [];

    public function storeValidate($request_data)
    {
        $rules = [
            'title' => [
                'required',
                'between:2,30',
            ],
            'article_id' => 'required|integer|min:1',
            'content' => 'required',
        ];
        $rest_validate = $this->validate($request_data, $rules);
        if ($rest_validate === true) {
            return $this->baseSucceed($this->data, $this->message);
        } else {
            $this->message = $rest_validate;
            return $this->baseFailed($this->message);
        }

    }

    public function updateValidate($request_data)
    {
        $rules = [
            'title' => [
                'required',
                'between:2,30',
            ],
            'article_id' => 'required|integer|min:1',
            'content' => 'required',
        ];
        $rest_validate = $this->validate($request_data, $rules);
        if ($rest_validate === true) {
            return $this->baseSucceed($this->data, $this->message);
        } else {
            $this->message = $rest_validate;
            return $this->baseFailed($this->message);
        }

    }

    public function destroyValidate()
    {
        return $this->baseSucceed($this->data, $this->message);
    }

    protected function validate($request_data, $rules)
    {
        $message = [
            'title.required' => '标题不能为空',
            'name.between' => '标题称只能在:min-:max个字符范围',
            'article_id.required' => '必须选择文章',
            'article_id.integer' => '文章格式不正确',
            'article_id.min' => '必须选择分类文章',
            'content.required' => '必须填写内容',
        ];
        $validator = Validator::make($request_data, $rules, $message);
        if ($validator->fails()) {
            return $validator->errors()->first();
        }
        return true;
    }
}
