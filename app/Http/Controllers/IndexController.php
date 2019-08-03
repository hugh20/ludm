<?php

namespace App\Http\Controllers;


use App\Models\Advertisement;

class IndexController extends WebController
{

    public function __construct()
    {
    }

    public function index()
    {
        //轮播图
        $advert = Advertisement::advertisementPositionSearch(1);//1是广告位
        $adverts = $advert->enable()->select('id', 'name', 'cover_image', 'link_url' )->limit(5)->get();

//        dd($adverts->toArray());
        return view('welcome',['adverts'=>$adverts->toArray()]);
    }

    public function dashboard()
    {
        return view('dashboard');
    }

    public function docs()
    {
        return view('docs');
    }

    public function changeLocale($locale)
    {
        if (in_array($locale, ['en', 'zh-cn'])) {
            session()->put('locale', $locale);
        }
        return redirect()->back()->withInput();
    }
}
