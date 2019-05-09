<?php

namespace App\Models;

use DB;

class IpFilter extends Model
{

    protected $fillable = [
        'type', 'ip'
    ];

    public function scopeTypeSearch($query, $value)
    {
        return $query->where('type', $value);
    }

    public function destroyAction()
    {

        try {
            $this->delete();
            return $this->baseSucceed([], '删除成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }


}
