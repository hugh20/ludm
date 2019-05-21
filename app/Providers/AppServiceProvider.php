<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \App\Models\Article::observe(\App\Observers\ArticleObserver::class);
        \App\Models\Section::observe(\App\Observers\SectionObserver::class);
        \App\Models\File::observe(\App\Observers\FileObserver::class);
        \App\Models\Vip::observe(\App\Observers\VipObserver::class);

        //mysql < 8.0
        // Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
