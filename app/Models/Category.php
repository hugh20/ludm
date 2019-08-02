<?php

namespace App\Models;

use DB;

class Category extends Model
{
    protected $fillable = [
        'name', 'cover_image', 'description','weight'
    ];

    public function articles()
    {
        return $this->hasMany('App\Models\Article');
    }

    protected function getCoverImageAttribute($value)
    {
        $attachment_info = File::find($value);
        if ($attachment_info) {
            $url = storage_image_url($attachment_info->path);
            $attachment_id = $attachment_info->id;
        } else {
            $url = '';
            $attachment_id = $value;
        }
        return [
            'url' => $url,
            'attachment_id' => $attachment_id
        ];
    }

    public function storeAction($input)
    {
        try {
            $this->fill($input)->save();

            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }

    public function updateAction($input)
    {
        try {
            $this->fill($input)->save();

            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }

    public function destroyAction()
    {
        try {
            if(in_array($this->id, [1,2,3,4])){
                return ['status' => false, 'message' => '前四个分类不可删除'];
            }
            $this->delete();
            return $this->baseSucceed([], '删除成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }
}
