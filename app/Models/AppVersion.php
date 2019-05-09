<?php

namespace App\Models;
use Auth;
use DB;

class AppVersion extends Model
{

    protected $fillable = [
        'port', 'system', 'version_sn', 'version_intro', 'package'
    ];

    protected function getPackageAttribute($value)
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

    public function storeAppVersion($input)
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

    public function updateAppVersion($input)
    {
        try {
            $this->fill($input)->save();
            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }


    public function destroyAppVersion()
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
