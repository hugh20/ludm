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
            if(in_array($this->id, [1,2,3,4,5])){
                return ['status' => false, 'message' => '前5个标签不可删除'];
            }
            $this->delete();
            return $this->baseSucceed([], '删除成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }

}
