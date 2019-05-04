<?php

namespace App\Http\Controllers\Api;

use Auth;
use Illuminate\Http\Request;
use App\Handlers\UploadHandler;
use App\Models\Article;
use App\Models\MultipleFile;
use App\Models\File;


class UploadController extends ApiController
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * @param Request $request
     * @param UploadHandler $uploader
     * @return array|\Illuminate\Config\Repository|mixed|string|void
     */
    public function ueditor(Request $request, UploadHandler $uploader){

        switch (strtolower($request->action)){
            case 'config':
                $result = config('filesystems.uploader.ueditor');
                break;

            /* 上传图片 */
            case 'uploadimage':
                /* 上传涂鸦 */
            case 'uploadscrawl':
                /* 上传文件 */
            case 'uploadfile':
                $result = $this->uploader($request, $uploader);
                break;
            /* 上传视频 */
            case 'uploadvideo':
                $request->file_type = 'video';
                $result = $this->uploader($request, $uploader);
                break;
            /* 列出图片 */
            case 'listimage':
                $result = $this->listimage($request);
                break;
            /* 列出文件 */
            case 'listfile':
                $result = $this->listfile($request);
                break;
            /* 抓取远程文件 */
            case 'catchimage':
                $result = $this->catchimage($request, $uploader);
                break;
            default:
                $result = $this->responseAjax(10,false, '请求地址出错');
                break;
        }

        if( ($callback = $request->callback) && (preg_match("/^[\w_]+$/", $callback)) ){
            return htmlspecialchars($callback) . '(' . json_encode($result) . ')';
        }else{
            return $result;
        }
    }

    /**
     * 检查分片
     *
     * @param Request $request
     * @param UploadHandler $uploader
     * @return array
     */
    public function checkChunk(Request $request, UploadHandler $uploader){

        $guid               = $request->guid ?? '';
        $md5                = $request->md5 ?? '';
        $chunk              = $request->chunk ?? 0;
        $chunks             = $request->chunks ?? 0;

        if( $exists = $uploader->checkChunk($guid, $md5, $chunk) ){
            return $this->responseAjax(0,true, '已上传');
        }

        return $this->responseAjax(1,false, '未上传');
    }

    /**
     * 检查文件 MD5
     *
     * @param Request $request
     * @param UploadHandler $uploader
     * @return array
     */
    public function checkMd5(Request $request, UploadHandler $uploader){

        // 检测是否是允许的类型
        if ( ! in_array( $folder = $request->folder, config('filesystems.uploader.folder', []) ) ) {
            return $this->responseAjax(2,false, '非法上传，上传类型错误');
        }

        // 判断是否有上传文件，并赋值给 $file
        if( !($md5 = $request->md5) ) {
            return $this->responseAjax(3,false, 'MD5参数不允许未空');
        }

        // 获取上传的类型
        $type = $request->file_type ?? 'file';

        // 检查文件
        $file = $uploader->checkFile($md5, $type, $folder);

        if( $file && request('uploader_type', '') == 'multiple' ){
            // 处理多文件
            $result = [
                'id'    => $file->id,
                'path'  => $file->path,
                'url'   => $type == 'image' ? storage_image_url($file->path) : storage_url($file->path),
            ];
            return $this->multiple($result, $request);
        }else if( $file ){
            return $this->responseAjax(4,true, '已存在', $file->path, $type == 'image' ? storage_image_url($file->path) : storage_url($file->path), $file->id);
        }else{
            return $this->responseAjax(5,false, '未上传');
        }
    }

    /**
     * 合并分片保存到文件系统
     *
     * @param Request $request
     * @param UploadHandler $uploader
     * @return array
     */
    public function mergeChunks(Request $request, UploadHandler $uploader){

        $guid               = $request->guid ?? '';
        $md5                = $request->md5 ?? '';
        $chunks             = $request->chunks ?? 0;
        $originalName       = $request->originalName ?? '';
        $mimeType           = $request->mimeType ?? '';
        $extension          = $request->extension ?? '';
        $type               = $request->file_type ?? 'file';
        $object_id          = intval($request->object_id ?? 0);
        $folder             = $request->folder;
        $editor             = intval($request->editor ?? 0);

        // 检测是否是允许的类型
        if ( ! in_array( $folder, config('filesystems.uploader.folder', []) ) ) {
            return $this->responseAjax(2,false, '非法上传，上传类型错误');
        }

        // 合并分片并保存到文件系统
        $result = $uploader->mergeChunks($guid, $md5, $chunks, $originalName, $mimeType, $extension, $type, $object_id, $folder, $editor);

        // 判断是否为多图多附件上传
        if( $result && request('uploader_type', '') == 'multiple' ){
            // 处理多文件
            return $this->multiple($result, $request);
        }else if($result){
            // 上传成功
            return $this->responseAjax(0,true, '上传成功', $result['path'], $result['url'], $result['id']);
        }else{
            // 上传失败
            return $this->responseAjax(6,false, '上传失败');
        }

    }

    /**
     * 文件上传
     *
     * @param Request $request
     * @param UploadHandler $uploader
     * @return array
     */
    public function uploader(Request $request, UploadHandler $uploader)
    {
        // 检测是否是允许的类型
        if ( ! in_array( $request->folder, config('filesystems.uploader.folder', []) ) ) {
            return $this->responseAjax(2,false, '非法上传，上传类型错误');
        }

        // 判断是否有上传文件，并赋值给 $file
        if( !($file = $request->file()) ) {
            return $this->responseAjax(3,false, '上传文件不允许未空');
        }
        // 获取上传的类型
        $file = $file['file'];
        $file_type = substr($file->getMimeType(), 0, strpos($file->getMimeType(), '/'));
        // 检查文件大小是否合法
        if( $file->getSize() <= 0 ){
            return $this->responseAjax(7,false, '文件大小不能为: 0 ');
        }
        if( $file->getSize() > config('filesystems.uploader.'.$file_type.'.size_limit') ){
            $message = '大小不能超过 '. byte_to_size(config('filesystems.uploader.'.$file_type.'.size_limit')) .'';
            return $this->responseAjax(8,false, $message);
        }

        // 获取分片参数
        $chunk = request('chunk', 0);
        $chunks = request('chunks', 1);

        // 检查是否是分片上传
        if($chunks > 1){
            $md5  = request('md5', '');
            $guid = request('guid', '');

            $result = $uploader->saveUploadChunk($guid, $md5, $file, $chunk);

            if($result){
                return $this->responseAjax(0,true, '上传成功');
            }

            return $this->responseAjax(6,false, '上传失败');
        }
        // 保存附件到文件系统
        $result = $uploader->saveUploadFile( $file_type, intval($request->object_id ?? 0), $file, $request->folder, intval($request->editor ?? 0) );

        // 判断是否为多图多附件上传
        if( $result && request('uploader_type', '') == 'multiple' ){
            // 处理多文件
            return $this->multiple($result, $request);
        }else if($result){
            // 上传成功
            return $this->responseAjax(0,true, '上传成功', $result['path'], $result['url'], $result['id']);
        }else{
            // 上传失败
            return $this->responseAjax(6,false, '上传失败');
        }
    }

    /**
     * 保存多文件
     *
     * @param $result
     * @param $request
     * @return array
     */
    private function multiple($result, $request){

        // 获取多附件所需参数
        $article_id     = $request->article_id;
        $field          = $request->field;
        $article        = Article::find($article_id);

        // 将附件保存到内容节点
        if( $article->addMultipleFiles( $result['path'], $field ) === null ){
            // 判断是否已在当前内容节点，上传过该文件
            return $this->responseAjax(9,false, '该文件已上传，请勿重复上传');
        }else{
            // 多图插入成功
            $file = MultipleFile::where('field',$field)->where('path',$result['path'])->pluck('id')->first();
            $multiple_id = intval($file);
        }

        // 上传成功
        return $this->responseAjax(0, true, '上传成功', $result['path'], $result['url'], $result['id'], $multiple_id);
    }

    /**
     * 生成响应结构
     *
     * @param int    $code
     * @param bool   $success
     * @param string $message
     * @param string $path
     * @param string $url
     * @param int    $id
     * @param int    $multiple_id
     *
     * @return array
     */
    protected function responseAjax($code = 1, $success = false, $message = '上传失败', $path = '', $url = '', $id = 0, $multiple_id = 0){


        0 < $id && ( $fileInfo = File::find($id) );

        return [
            // 默认
            'code'              => $code,
            'success'           => $success,          // 状态
            'url'               => $url,              // 完整可访问URL
            'message'           => $message,          // 提示消息
            'path'              => $path,             // 文件相对地址
            'id'                => $id,               // 文件ID
            'multiple_id'       => $multiple_id,      // 文件ID

            // 兼容 Simditor
            # 'success'           => $success,
            'msg'               => $message,
            'file_path'         => $url,

            // 兼容 Zui Uploader
            'result'            => $success === true ? 'ok' : 'failed',
            # 'message'           => $message,
            # 'url'               => $url,

            // 兼容 Ueditor
            /*
             * 得到上传文件所对应的各个参数,数组结构
             * array(
             *     "state" => "",          //上传状态，上传成功时必须返回"SUCCESS"
             *     "url" => "",            //返回的地址
             *     "title" => "",          //新文件名
             *     "original" => "",       //原始文件名
             *     "type" => ""            //文件类型
             *     "size" => "",           //文件大小
             * )
             */

            'state'             => $success === true ? 'SUCCESS' : $message,
            'title'             => $fileInfo->title ?? '',
            'original'          => $fileInfo->title ?? '',
            'type'              => $fileInfo->mime_type ?? '',
            'size'              => $fileInfo->site ?? 0,

        ];


    }


    /**
     * 列出图片
     * @param Request $request
     * @return array|string
     */
    protected function listimage(Request $request)
    {
        $listSize = config('filesystems.uploader.ueditor.imageManagerListSize', 20);
        $size = $request->size ?: $listSize;
        $start = $request->start ?: 0;

        $file = File::where('folder', $request->folder)->where('type','image');

        $count = $file->count();
        $files = $file->recent()->skip($start)->take($size)->get();

        /* 未查询到数据返回空 */
        if(!$count){
            return [
                "state" => "no match file",
                "list" => array(),
                "start" => $start,
                "total" => $count
            ];
        }

        foreach($files as $v){
            $list[] = [
                'mtime' => $v->created_at->timestamp,
                'url' => storage_image_url($v->path)
            ];
        }

        /* 返回数据 */
        $result = json_encode(array(
            "state" => "SUCCESS",
            "list" => $list,
            "start" => $start,
            "total" => $count
        ));

        return $result;


    }

    /**
     * 列出文件
     * @param Request $request
     * @return array|string
     */
    protected function listfile(Request $request)
    {
        $listSize = config('filesystems.uploader.ueditor.fileManagerListSize', 20);
        $size = $request->size ?: $listSize;
        $start = $request->start ?: 0;

        $file = File::where('folder', $request->folder);

        $count = $file->count();
        $files = $file->recent()->skip($start)->take($size)->get();

        /* 未查询到数据返回空 */
        if(!$count){
            return [
                "state" => "no match file",
                "list" => array(),
                "start" => $start,
                "total" => $count
            ];
        }

        foreach($files as $v){
            $list[] = [
                'mtime' => $v->created_at->timestamp,
                'url' => storage_url($v->path)
            ];
        }

        /* 返回数据 */
        $result = json_encode(array(
            "state" => "SUCCESS",
            "list" => $list,
            "start" => $start,
            "total" => $count
        ));

        return $result;
    }

    /**
     * 抓取远程文件
     *
     * @param Request $request
     * @param UploadHandler $uploader
     */
    public function catchimage(Request $request, UploadHandler $uploader)
    {

    }
}

