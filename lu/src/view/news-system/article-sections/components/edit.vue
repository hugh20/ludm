<template>
    <div>
        <Modal v-model="modalShow" :closable='false' :mask-closable=false fullscreen>
            <p slot="header">修改</p>
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
                        <upload v-if='formdataFinished' v-model="formData.cover_image" :is-delete='false'
                                :upload-config="imguploadConfig" @on-upload-change='uploadChange'></upload>
                    </FormItem>
                    <FormItem label="关键词：" prop="keywords">
                        <Input type="textarea" v-model="formData.keywords" placeholder="以英文逗号隔开"></Input>
                        <input-helper text="以英文逗号隔开"></input-helper>
                    </FormItem>
                    <FormItem label="描述：" prop="description">
                        <Input type="textarea" v-model="formData.descriptions" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="文章内容：">
                        <markdown-editor v-if="formdataFinished" :cache="false" v-model="formData.content"
                                         :value="formData.content"/>
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
                <Button type="primary" @click="editExcute" :loading='saveLoading'>保存 </Button>
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
        edit,
        getInfoById
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
        props: {
            modalId: {
                type: Number,
                default: 0
            }
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
                    description: '',
                    content: '',
                    weight: 20,
                    access_type: '1',
                    tags: 0,
                    article_id: 0
                },
                formdataFinished: false,
                editOpenness: false,
                newTagName: '',
                articleTags: {},
                rules: {
                    title: [{
                        required: true,
                        message: '请填写文章标题',
                        trigger: 'blur'
                    }],
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
            this.getTagListExcute()
            this.getInfoByIdExcute()
        },
        methods: {
            getTagListExcute() {
                let t = this;
                getTagList().then(res => {
                    t.articleTags = res.data;
                })
            },
            getInfoByIdExcute() {
                let t = this;
                getInfoById(t.modalId).then(res => {
                    let res_data = res.data;
                    console.log(res_data);
                    t.formData = {
                        id: res_data.id,
                        title: res_data.title,
                        keywords: res_data.keywords,
                        descriptions: res_data.descriptions,
                        category_id: res_data.category_id,
                        weight: res_data.weight,
                        access_type: res_data.access_type + '',
                        cover_image: {
                            attachment_id: res_data.cover_image.attachment_id,
                            url: res_data.cover_image.url
                        },
                        article_id: res_data.article_id
                    };
                    console.log(t.formData);
                    if(t.formData.cover_image.attachment_id) {
                        t.imguploadConfig.default_list = [t.formData.cover_image];
                    }
                    t.formData.tags = res_data.tagids;
                    t.formData.content = res_data.content.raw;
                    t.formdataFinished = true;
                    t.spinLoading = false;
                })

            },
            editExcute() {
                let t = this
                t.$refs.formData.validate((valid) => {
                    if (valid) {
                        t.saveLoading = true;
                        edit(t.modalId, t.formData).then(res => {
                            t.saveLoading = false
                            t.modalShow = false
                            t.$emit('on-edit-modal-success')
                            t.$emit('on-edit-modal-hide')
                            t.$Notice.success({
                                title: res.message
                            })
                        }, function (error) {
                            t.saveLoading = false;
                        })
                    }
                })
            },
            cancel() {
                this.modalShow = false
                this.$emit('on-edit-modal-hide')
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
