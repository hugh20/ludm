<?php

namespace App\Models;

use DB;

class Tag extends Model
{

    protected $fillable = [
        'name',
    ];

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
