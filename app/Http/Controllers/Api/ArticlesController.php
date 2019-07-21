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
        $validator = Validator::make($request->all(), [
            'category_id' => 'required|integer|min:1',
        ]);

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

    public function comic(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'comic_id' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            $res_msg = $validator->errors()->first();
            return $this->failed($res_msg);
        }

        $comic_id = $request->get('comic_id');

        $comic = Article::with('user', 'category', 'tags')->where(['id' => $comic_id])->first();

        return $this->success($comic ? $comic->toArray() : []);
    }
}
