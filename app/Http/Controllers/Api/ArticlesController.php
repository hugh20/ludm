<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\CommonCollection;
use App\Models\Article;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ArticlesController extends ApiController
{

    public function categoryComic(Request $request)
    {
        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            $res_msg = $validator->errors()->first();
            return $this->failed($res_msg);
        }

        $category_id = $request->get('category_id');
        $per_page    = $request->get('per_page', 10);

        $filter     = 'default';
        $user_id    = 0;
        $tag_id     = 0;
        $year       = '';
        $month      = '';
        $order      = 'id';
        $order_type = 'desc';
        $list       = (new Article())->getArticlesWithFilter($filter, $user_id, '', $tag_id, $category_id, '', '', 'T', $year, $month, $order, $order_type, $per_page);
        return new CommonCollection($list);

    }

    protected function validator($data)
    {
        return Validator::make($data, [
            'category_id' => 'required|integer|min:1',
        ]);
    }
}
