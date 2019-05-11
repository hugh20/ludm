<?php

namespace App\Observers;

use App\Jobs\TranslateSlug;
use App\Models\Section;


class SectionObserver
{
    public function saved(Section $section)
    {
        if ( ! $section->slug) {

            dispatch(new TranslateSlug($section));
        }
    }
}
