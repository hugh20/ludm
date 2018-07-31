<?php

namespace App\Validates;

use DB;

class  AttachmentValidate extends Validate
{
    protected $message = '操作成功';
    protected $data = [];

    public function destroyValidate($permission)
    {
        if ($permission->enable === 'T') return $this->baseFailed('启用状态的附件不允许删除');
        switch ($permission->storage_position) {
            case 'local':
                break;
            case 'oss':
                return $this->baseFailed('oss 附件的删除方法还未实现');
                break;
            default :
                $this->baseFailed('未知的存储方式');
                break;
        }

        return $this->baseSucceed($this->data, $this->message);
    }
}
