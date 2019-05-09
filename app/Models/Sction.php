<?php

namespace App\Models;

use App\Handlers\MarkdownerHandler;
use App\Models\Traits\SectionFilterTrait;
use DB;
use Illuminate\Support\Facades\Auth;

class Section extends Model
{
    use SectionFilterTrait;

    protected $fillable = [
        'article_id',
        'title',
        'slug',
        'keywords',
        'descriptions',
        'cover_image',
        'content',
        'user_id',
        'view_count',
        'vote_count',
        'comment_count',
        'collection_count',
        'access_type',
        'created_at',
        'updated_at',
    ];


    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    protected function setContentAttribute($value)
    {
//        $value = clean($value, 'article_content');
        $data = [
            'raw' => $value,
            'html' => (new MarkdownerHandler())->convertMarkdownToHtml($value)
        ];
        $this->attributes['content'] = json_encode($data);
    }

    protected function getContentAttribute($value)
    {
        return json_decode($value, true);
    }

    protected function getCoverImageAttribute($value)
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

    /*
         public function storeAllCar($input)
    {
        DB::beginTransaction();
        try {
            if ($input['car_images']) {
                $this->saveAttachmentAfterSave($input['car_images']);
                $input['car_images'] = implode(',', $input['car_images']);
            }
            $this->fill($input);
            $this->save();

            admin_log_record(Auth::id(), 'C', 'all_cars', '添加了车辆', $input);
            DB::commit();
            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            throw $e;
            DB::rollBack();
            return $this->baseFailed('内部错误');
        }
    }
     */

    public function storeAction($input)
    {
        try {
            $this->fill($input);
            $this->user_id = Auth::id();
            $this->save();

            if (is_array($input['tags']) && count($input['tags']) > 0) {
                $this->syncTag($input['tags']);
            }

            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }

    public function updateAction($input)
    {
        try {
            $this->fill($input)->save();
            if (is_array($input['tags']) && count($input['tags']) > 0) {
                $this->syncTag($input['tags']);
            }

            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }

    /*
        public function updateAllCar($input)
    {
        $old_car_images = $this->car_images;
        DB::beginTransaction();
        try {
            if ($input['car_images']) {
                if ($old_car_images) {
                    $this->updateAttachmentAfterNotUseAgain(array_column($old_car_images, 'attachment_id'));
                }
                    $this->saveAttachmentAfterSave($input['car_images']);
                    $input['car_images'] = implode(',', $input['car_images']);
            }

            $this->fill($input);
            $this->save();

            admin_log_record(Auth::id(), 'U', 'all_cars', '修改了车辆', $input);
            DB::commit();
            return $this->baseSucceed([], '操作成功');
        } catch
        (\Exception $e) {
            throw $e;
            DB::rollBack();
            return $this->baseFailed('内部错误');
        }
    }
     */

    public function destroyAction()
    {
        try {
            $this->tags()->detach();
            $this->delete();

            return $this->baseSucceed([], '删除成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }

}
