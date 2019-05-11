<template>
    <div>
        <Modal v-model="modalShow" :closable='false' :mask-closable="false" fullscreen>
            <p slot="header">添加</p>
            <Row>
                <Col span="16">
                <Form ref="formData" :model="formData" :rules="rules" label-position="left" :label-width="100">
                    <FormItem label="文章：">
                        <Input :value="$route.query.article_title" readonly></Input>
                    </FormItem>
                    <FormItem label="标题：" prop="title">
                        <Input v-model="formData.title"></Input>
                    </FormItem>
                    <FormItem label="封面：">
                        <upload v-model="formData.cover_image" :upload-config="imguploadConfig"
                                @on-upload-change='uploadChange'></upload>
                    </FormItem>
                    <FormItem label="关键词：" prop="keywords">
                        <Input type="textarea" v-model="formData.keywords" placeholder="以英文逗号隔开"></Input>
                        <input-helper text="以英文逗号隔开"></input-helper>
                    </FormItem>
                    <FormItem label="描述：" prop="description">
                        <Input type="textarea" v-model="formData.descriptions" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="章节内容：">
                        <markdown-editor v-model="formData.content" :cache='true'/>
                    </FormItem>
                </Form>
                </Col>

                <Col span="8" class="padding-left-20">
                <Card>
                    <p slot="title">
                        <Icon type="paper-airplane"></Icon>
                        其它信息
                    </p>
                    <Form label-position="right" :label-width="80">
                        <FormItem label="章节序号：">
                            <Input v-model="formData.weight" placeholder="请输入序号"></Input>
                        </FormItem>
                        <FormItem label="公开度：">
                            <Icon type="eye"></Icon>
                            <div class="publish-time-picker-con">
                                <RadioGroup v-model="formData.access_type" vertical>
                                    <Radio label="0" value="0"> 免费</Radio>
                                    <Radio label="1" value="1"> VIP</Radio>
                                    <Radio label="2" value="2"> 付费</Radio>
                                </RadioGroup>
                            </div>
                        </FormItem>
                        <FormItem label="标签：">
                            <Select v-model="formData.tags" multiple filterable placeholder="请选择文章标签">
                                <Option v-for="item in articleTags" :value="item.id" :key="item.id">{{ item.name }}
                                </Option>
                            </Select>
                        </FormItem>
                        <FormItem label="新建标签">
                            <Input v-model="newTagName" search enter-button="新建" placeholder="标签名字"
                                   @on-search="addEditExcute"/>
                        </FormItem>
                    </Form>
                </Card>
                </Col>

            </Row>
            <div slot="footer">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="addExcute" :loading='saveLoading'>保存 </Button>
            </div>
            <div class="demo-spin-container" v-if='spinLoading === true'>
                <Spin fix>
                    <Icon type="load-c" size=18  class="spin-icon-load"></Icon>
                    <div>加载中...</div>
                </Spin>
            </div>
        </Modal>
    </div>
</template>
<script>
    import {
        add
    } from '@/api/article-section'

    import {
        addEdit,
        getTagList
    } from '@/api/tag'

    import Upload from '_c/common/upload'
    import InputHelper from '_c/common/input-helper'
    import MarkdownEditor from '_c/markdown'

    export default {
        components: {
            Upload,
            InputHelper,
            MarkdownEditor
        },
        data() {
            return {
                modalShow: true,
                saveLoading: false,
                spinLoading: true,
                formData: {
                    title: '',
                    cover_image: {
                        attachment_id: 0,
                        url: '',
                    },
                    keywords: '',
                    descriptions: '',
                    content: '',
                    weight: 20,
                    access_type: '1',
                    tags: 0,
                    article_id: 0
                },
                editOpenness: false,
                newTagName: '',
                articleTags: {},
                rules: {
                    title: [{
                        required: true,
                        message: '请填章节标题',
                        trigger: 'blur'
                    }]

                },
                imguploadConfig: {
                    headers: {
                        'Authorization': window.access_token
                    },
                    format: ['jpg', 'jpeg', 'png', 'gif'],
                    max_size: 800, // 800KB
                    upload_url: window.uploadUrl.uploadAdvertisement,
                    file_name: 'file',
                    multiple: false,
                    file_num: 1,
                    default_list: []
                },
            }
        },
        mounted() {
            this.spinLoading = false;
            this.getTagListExcute();
            this.formData.article_id = this.$route.params.article_id;
        },
        methods: {
            getTagListExcute() {
                let t = this;
                getTagList().then(res => {
                    t.articleTags = res.data;
                })
            },
            addExcute() {
                let t = this
                t.$refs.formData.validate((valid) => {
                    if (valid) {
                        t.saveLoading = true;
                        try {
                            add(t.formData).then(res => {
                                t.saveLoading = false
                                t.modalShow = false
                                t.$emit('on-add-modal-success')
                                t.$emit('on-add-modal-hide')
                                t.$Notice.success({
                                    title: res.message
                                })
                            }, function (error) {
                                t.saveLoading = false;
                            });
                        }catch (e){
                            console.log(e)
                        }
                    }
                })
            },
            cancel() {
                this.modalShow = false
                this.$emit('on-add-modal-hide')
            },
            uploadChange(fileList, formatFileList) {
            },
            addEditExcute() {
                let t = this;
                addEdit({
                    name: t.newTagName
                }).then(res => {
                    t.getTagListExcute()
                    t.$Notice.success({
                        title: res.message
                    })
                })
            }
        }
    }
</script>
