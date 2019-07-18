<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CategoriesController extends ApiController
{
    public function categoryList(Category $model)
    {
        return $this->success($model->orderBy('weight', 'asc')->get());
    }

    public function categoryComic(Request $request)
    {
        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            $res_msg = $validator->errors()->first();
            return $this->failed($res_msg);
        }

        $id = $request->get('id');



    }

    protected function validator($data)
    {
        return Validator::make($data, [
            'id' => 'required|integer|min:1',
        ]);
    }
}
