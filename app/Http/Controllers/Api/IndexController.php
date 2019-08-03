<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\CommonCollection;
use App\Models\Advertisement;
use App\Models\Article;
use Illuminate\Http\Request;

class IndexController extends ApiController
{


    public function getAdverts()
    {
        //轮播图
        $advert  = Advertisement::advertisementPositionSearch(1);//1是广告位
        $adverts = $advert->enable()->select('id', 'name', 'cover_image', 'link_url')->limit(5)->get();
        return $this->success($adverts);
    }

    public function getComic()
    {
        $be_online  = (new Article)->getArticlesWithFilter('', 0, '', 1, 0, null, '', 'T', '', '', 'weight', 'asc', 3);//新作上线
        $new_update = (new Article)->getArticlesWithFilter('', 0, '', 2, 0, null, '', 'T', '', '', 'weight', 'asc', 3);//今日我更新
        $recommend  = (new Article)->getArticlesWithFilter('', 0, '', 3, 0, null, '', 'T', '', '', 'weight', 'asc', 6);//无良推荐
        $day_push   = (new Article)->getArticlesWithFilter('', 0, '', 4, 0, null, '', 'T', '', '', 'weight', 'asc', 1);//每日一推
        $classical  = (new Article)->getArticlesWithFilter('', 0, '', 5, 0, null, '', 'T', '', '', 'weight', 'asc', 3);//日漫经典
        $data['be_online']  = new CommonCollection($be_online);
        $data['new_update'] = new CommonCollection($new_update);
        $data['recommend']  = new CommonCollection($recommend);
        $data['day_push']   = new CommonCollection($day_push);
        $data['classical']  = new CommonCollection($classical);
        return $this->success($data);
    }

}
