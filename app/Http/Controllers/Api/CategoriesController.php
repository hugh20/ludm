<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;

class CategoriesController extends ApiController
{
    public function categoryList(Category $model)
    {
        return $this->success($model->orderBy('weight', 'asc')->get());
    }
}
