<?php

namespace App\Models;

class Vip extends Model
{

    protected $fillable = [
        'user_id', 'level', 'started_at', 'expired_at', 'created_at', 'updated_at', 'deleted_at'
    ];

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function storeAction($input)
    {
        try {
            $vip = self::where(['user_id' => $input['user_id']])->first();
            if(!$vip) $vip = new self();
            $vip->fill($input);
            $vip->save();

            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }

}
