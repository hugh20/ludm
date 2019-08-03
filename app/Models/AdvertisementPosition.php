<?php

namespace App\Models;

use DB;


class AdvertisementPosition extends Model
{
    protected $fillable = [
        'name', 'type', 'description','created_at'
    ];

    public function scopeTypeSearch($query, $value)
    {
        return $query->where('type', $value);
    }


    public function destroyAction()
    {

        try {
            if(in_array($this->id, [1])){
                return ['status' => false, 'message' => '轮播图不可删除'];
            }
            $this->delete();
            return $this->baseSucceed([], '广告位删除成功');
        } catch (\Exception $e) {
            return $this->baseFailed('内部错误');
        }
    }

}
