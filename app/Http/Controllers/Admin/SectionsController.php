<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\CommonCollection;
use App\Models\Section;
use App\Validates\SectionValidate;
use Illuminate\Http\Request;
use Auth;

class SectionsController extends AdminController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api');
    }

    public function sectionList(Request $request, Section $model)
    {
        $per_page = $request->get('per_page', 10);
        $search_data = json_decode($request->get('search_data'), true);
        $filter = 'default';
        $user_id = 0;
        $title = isset_and_not_empty($search_data, 'title');
        $tag_id = 0;
        $order = 'created_at';
        $order_type = 'desc';
        $article_id = $request->input('article_id');
        $order_by = isset_and_not_empty($search_data, 'order_by');
        if ($order_by) {
            $order_by = explode(',', $order_by);
            $order = $order_by[0];
            $order_type = $order_by[1];
        }

        $list = $model->getSectionWithFilter($filter, $article_id, $user_id, $title, $tag_id, $order, $order_type, $per_page);
        return new CommonCollection($list);
    }


    public function show(Section $model)
    {

        $article_tag = $model->tags->toArray();

        $model->tagids = array_column($article_tag, 'id');
        return $this->success($model);
    }

    public function store(Request $request, Section $model, SectionValidate $validate)
    {
        $request_data = $request->all();
        if(!isset_and_not_empty($request_data,'access_value')) {
           unset($request_data['access_value']);
        }

        if (isset($request_data['cover_image']['attachment_id'])) {
            $attachement_id = $request_data['cover_image']['attachment_id'];
        } else {
            $attachement_id = 0;
        }
        $request_data['cover_image'] = $attachement_id;

        $rest_validate = $validate->storeValidate($request_data);

        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);


        $res = $model->storeAction($request_data);
        if ($res['status'] === true) return $this->message($res['message']);
        return $this->failed($res['message']);
    }

    public function update(Request $request, Section $model, SectionValidate $validate)
    {
        if (!$model) return $this->failed('找不到数据', 404);

        $request_data = $request->all();
        if(!isset_and_not_empty($request_data,'access_value')) {
            unset($request_data['access_value']);
        }

        if (isset($request_data['cover_image']['attachment_id'])) {
            $attachement_id = $request_data['cover_image']['attachment_id'];
        } else {
            $attachement_id = 0;
        }
        $request_data['cover_image'] = $attachement_id;

        $rest_validate = $validate->updateValidate($request_data, $model->id);

        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);


        $res = $model->updateAction($request_data);
        if ($res['status'] === true) return $this->message($res['message']);
        return $this->failed($res['message']);
    }

    public function destroy(Section $model, SectionValidate $validate)
    {
        if (!$model) return $this->failed('找不到数据', 404);
        $rest_destroy_validate = $validate->destroyValidate($model);
        if ($rest_destroy_validate['status'] === true) {
            $rest_destroy = $model->destroyAction();
            if ($rest_destroy['status'] === true) return $this->message($rest_destroy['message']);
            return $this->failed($rest_destroy['message'], 500);
        } else {
            return $this->failed($rest_destroy_validate['message']);
        }
    }
}
