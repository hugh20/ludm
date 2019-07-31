<?php

namespace App\Http\Controllers\Api;

use App\Models\Article;
use App\Models\Section;
use App\Models\Vip;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SectionsController extends ApiController
{
    public function __construct(Request $request)
    {
        parent::__construct();
        if($request->header('authorization')) {
            $this->middleware('auth:api');
        }
    }

    public function getInfo(Request $request){
        $validator = Validator::make($request->all(), [
//            'comic_id'      => 'required|integer|min:1',
            'section_id'    => 'required|integer|min:1',
        ]);


        if ($validator->fails()) {
            $res_msg = $validator->errors()->first();
            return $this->failed($res_msg);
        }

        $section_id = $request->get('section_id');
        $section = Section::find($section_id);
        if(!$section )return $this->failed('章节不存在');

        if($section->access_type == 1){
            $id = Auth::id();
            if(!$id) {
                return $this->failed('请先登录', Response::HTTP_UNAUTHORIZED);
            }
            $time = date('Y-m-d');
            $vip  = Vip::where('user_id', $id)->where('started_at', '<', $time)
                ->where('expired_at', '>', $time)->first();
            if (!$vip) {
                return $this->failed('您的权限不足');
            }
        }
        $section->view_count += 1;
        $section->save();

//        $article_id = $request->get('comic_id');
        $article = Article::find($section['article_id']);
        $article->view_count += 1;
        $article->save();
        $pattern = '/<img.*? src=\"(.*?)\".*?>/s';
        $section->content['html'];
        preg_match_all($pattern, $section->content['html'], $arr);
        $section->urls = $arr[1];
        return $this->success($section->toArray());
    }
}
