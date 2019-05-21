<?php

namespace App\Observers;

use App\Models\Vip;


class VipObserver
{
    public function saving(Vip $vip)
    {
        $vip->started_at = is_int($vip->started_at) ? date('Y-m-d', $vip->started_at): $vip->started_at;
        $vip->expired_at = is_int($vip->expired_at) ? date('Y-m-d', $vip->expired_at): $vip->expired_at;
    }
}
