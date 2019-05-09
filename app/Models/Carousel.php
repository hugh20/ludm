<?php

namespace App\Models;

use DB;

class Carousel extends Model
{
    protected $fillable = [
        'cover_image', 'description', 'url', 'weight'
    ];

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
            $this->fill($input);
            $this->save();
            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }


    public function updateAction($input, $m_carsousel)
    {
        try {
            $m_carsousel->saveData($input);
            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            return $this->baseFailed('内部错误');
        }
    }

    public function destroyAction($m_carsousel)
    {
        try {
            $m_carsousel->delete();

            return $this->baseSucceed([], '删除成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }

}
