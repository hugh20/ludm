<?php

namespace App\Models\Traits;

use App\Models\Tag;
use Illuminate\Support\Facades\DB;

trait SectionFilterTrait
{

    /**
     * @param string $filter 免费、vip、收费
     * @param int $user_id 用户 id
     * @param string $title 标题
     * @param int $tag_id
     * @param string $order
     * @param string $order_type
     * @param int $limit
     * @return mixed
     * @internal param int $year 创建 年份
     * @internal param int $month ....
     */
    public function getSectionWithFilter($filter, $user_id = 0, $title = '', $tag_id = 0, $order = 'created_at', $order_type = 'desc', $limit = 15)
    {
        $filter = $this->getSectionFilter($filter);

        return $this->applyFilter($filter, $user_id, $title, $tag_id, $order, $order_type)
            ->with('user', 'tags')
            ->paginate($limit);
    }

    public function getSectionsWithWhoFilter($filter, $limit = 5, $user_id = 0)
    {

        $filter = $this->getSectionFilter($filter);

        return $this->applyFilter($filter, 0)
            ->where('user_id', '=', $user_id)
            ->paginate($limit);
    }

    public function tags()
    {
        return $this->morphToMany('App\Models\Tag', 'model', 'model_has_tags', 'model_id');
    }

    public function syncTag($tags = '')
    {
        return $this->tags()->sync($tags);
    }

    protected function applyFilter($filter, $user_id, $title, $tag_id, $order, $order_type)
    {
        $query = $this;
        if ($user_id) {
            $query = $query->useridSearch($user_id);
        }

        if ($tag_id) {
            $section_ids = DB::table('model_has_tags')
                ->where('tag_id', $tag_id)
                ->where('model_type', 'App\Models\Section')
                ->distinct()
                ->pluck('model_id');
            $query = $query->sectionIdSearch($section_ids);
        }

        if ($title) {
            $query = $query->sectionSearch($title);
        }

        switch ($filter) {
            case 0 :
                $query = $query->withAccessType('0');
                break;
            case 1:
                $query = $query->withAccessType('1');
                break;
            case 2:
                $query = $query->withAccessType('2');
            case 'default':
                break;
        }
        return $query->orderBy($order, $order_type);
    }

    public function scopeUseridSearch($query, $user_id)
    {
        return $query->where('user_id', '=', $user_id);
    }

    public function scopeTitleSearch($query, $title)
    {
        return $query->where('title', 'like', '%' . $title . '%');
    }

    public function scopeWithAccessType($query, $access_type)
    {
        return $query->where('access_type', '=', $access_type);
    }

    public function scopeSectionIdSearch($query, $sectionid)
    {
        return $query->whereIn('id', $sectionid);
    }

    protected function getSectionFilter($request_filter)
    {
        $filters = ['free', 'vip', 'charged'];
        if (($request_filter = array_search($request_filter, $filters)) !== false) {
            return $request_filter;
        }
        return 'default';
    }

}
