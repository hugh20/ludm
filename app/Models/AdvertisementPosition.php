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
            $this->delete();
            return $this->baseSucceed([], '广告位删除成功');
        } catch (\Exception $e) {
            return $this->baseFailed('内部错误');
        }
    }

}
