<?php

namespace App\Models;

use DB;

class Advertisement extends Model
{
    protected $casts = [
        'model_column_value' => 'array',
    ];

    protected $fillable = [
        'name', 'cover_image', 'descriptions', 'content', 'weight', 'advertisement_positions_id', 'link_url',
        'model_column_value', 'start_at', 'end_at', 'enable'
    ];

    public function advertisementPosition()
    {
        return $this->belongsTo('App\Models\AdvertisementPosition', 'advertisement_positions_id', 'id');
    }

    public function scopeAdvertisementPositionSearch($query, $advertisemet_positio_id)
    {
        return $query->where('advertisement_positions_id', $advertisemet_positio_id);
    }

    protected function setContentAttribute($value)
    {
        $value = clean($value, 'advertisement_content');
        $data = [
            'raw' => '',
            'html' => $value
//            'html' => (new MarkdownerHandler())->convertMarkdownToHtml($value)
        ];
        $this->attributes['content'] = json_encode($data);
    }

    protected function getContentAttribute($value)
    {
        return json_decode($value, true);
    }

    protected function getCoverImageAttribute($value)
    {
        $attachment_info = File::find($value);
        if ($attachment_info) {
            $url =  storage_image_url($attachment_info->path);
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

            $this->delete();
            return $this->baseSucceed([], '广告删除成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }

}
