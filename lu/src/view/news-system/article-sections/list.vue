<template>
    <div>
        <Row :gutter="24">
            <Col :xs="6" :lg="3">
            <Button type="success" icon="plus" @click="addBtn()">添加</Button>
            </Col>
            <Col :xs="3" :lg="4" class="hidden-mobile">
            <Input icon="search" placeholder="请输入标题..." v-model="searchForm.title"/>
            </Col>
            <Col :xs="3" :lg="3">
            </Col>
            <Col :xs="1" :lg="3">
            <Button type="primary" icon="ios-search" @click="getTableDataExcute(feeds.current_page)">Search</Button>
            </Col>
        </Row>
        <br>

        <Row>
            <div class="demo-spin-container" v-if="tableLoading">
                <Spin fix>
                    <Icon type="load-c" size=18  class="spin-icon-load"></Icon>
                    <div>加载中...</div>
                </Spin>
            </div>
            <Table border :columns="columns" :data="feeds.data" @on-sort-change='onSortChange'></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="feeds.total" :current="feeds.current_page" :page-size="feeds.per_page" class="paging"
                          show-elevator show-total show-sizer @on-change="handleOnPageChange"
                          @on-page-size-change='onPageSizeChange'></Page>
                </div>
            </div>
        </Row>

        <show-info v-if='showInfoModal.show' :info='showInfoModal.info' @show-modal-close="showModalClose"></show-info>
        <add-component v-if='addModal.show'
                       @on-add-modal-success='getTableDataExcute(feeds.current_page)'
                       @on-add-modal-hide="addModalHide"></add-component>
        <edit-component v-if="editModal.show" :modal-id='editModal.id'
                        @on-edit-modal-success='getTableDataExcute(feeds.current_page)'
                        @on-edit-modal-hide="editModalHide"></edit-component>

    </div>
</template>


<script>
    import AddComponent from './components/add'
    import AddMobileComponent from './components/add-mobile'
    import EditComponent from './components/edit'
    import EditMobileComponent from './components/edit-mobile'
    import ShowInfo from './components/show-info'

    import {
        getTableStatus,
        switchEnable
    } from '@/api/common'

    import {
        getTableData,
        destroy
    } from '@/api/article-section'

    export default {
        components: {
            AddComponent,
            EditComponent,
            ShowInfo
        },
        data() {
            return {
                article_id: 0,
                searchForm: {
                    order_by: 'id,desc',
                    title: ''
                },
                tableLoading: false,
                tableStatus: {
                    enable: []
                },
                feeds: {
                    data: [],
                    total: 0,
                    current_page: 1,
                    per_page: 10
                },
                tagList: {},
                addModal: {
                    show: false
                },
                editModal: {
                    show: false,
                    id: 0
                },
                showInfoModal: {
                    show: false,
                    info: ''
                },
                columns: [{
                    title: 'ID',
                    key: 'id',
                    sortable: 'customer',
                    minWidth: 50,
                },
                    {
                        title: '标题',
                        key: 'title',
                        minWidth: 150,
                    },
                    {
                        title: '封面',
                        minWidth: 150,
                        render: (h, params) => {
                            let t = this;
                            if (params.row.cover_image.url) {
                                return h('div', [
                                    h('img', {
                                        attrs: {
                                            src: params.row.cover_image.url,
                                            class: 'fancybox',
                                            href: params.row.cover_image.url,
                                            title: '图片'
                                        },
                                        style: {
                                            width: '40px',
                                            height: '40px'
                                        },
                                    }),
                                ]);
                            }
                        }
                    },
                    {
                        title: '标签',
                        minWidth: 100,
                        render: (h, params) => {
                            var tags = params.row.tags;
                            var text = '';
                            for (var key in tags) {
                                if (key < 1) {
                                    text += tags[key].name
                                } else {
                                    text += '、' + tags[key].name
                                }
                            }
                            return h('div',
                                text
                            )
                        }
                    },
                    {
                        title: '创建时间',
                        sortable: 'customer',
                        key: 'created_at',
                        minWidth: 150,
                    },
                    {
                        title: '操作',
                        minWidth: 200,
                        render: (h, params) => {
                            let t = this;
                            var delete_btn = '';

                            delete_btn = h('Poptip', {
                                props: {
                                    confirm: true,
                                    title: '您确定要删除「' + params.row.title + '」？',
                                    transfer: true
                                },
                                on: {
                                    'on-ok': () => {
                                        t.destroyExcute(params.row.id, params.index);
                                    }
                                }
                            }, [
                                h('Button', {
                                    style: {
                                        margin: '0 5px'
                                    },
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                        placement: 'top'
                                    }
                                }, '删除'),
                            ])
                            return h('div', [
                                h('Button', {
                                    style: {
                                        margin: '0 5px'
                                    },
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.showInfoModal.show = true
                                            this.showInfoModal.info = params.row
                                        }
                                    }

                                }, '详细'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.editModal.show = true
                                            this.editModal.id = params.row.id
                                        }
                                    }

                                }, '修改'),
                                delete_btn
                            ])
                        }
                    }
                ]
            }
        },
        mounted() {
            let t = this;
            this.article_id = t.$route.params.article_id;
            t.getTableDataExcute(t.feeds.current_page);
        },
        computed: {
        },
        methods: {
            handleOnPageChange: function (to_page) {
                this.getTableDataExcute(to_page)
            },
            onPageSizeChange: function (per_page) {
                this.feeds.per_page = per_page
                this.getTableDataExcute(this.feeds.current_page)
            },
            getTableStatusExcute(params) {
                let t = this
                getTableStatus(params).then(res => {
                    const response_data = res.data
                    t.tableStatus.enable = response_data.enable
                    t.tableStatus.recommend = response_data.recommend
                    t.tableStatus.top = response_data.top
                })
            },
            getTableDataExcute(to_page) {
                let t = this;
                t.tableLoading = true
                t.feeds.current_page = to_page
                getTableData(to_page, t.feeds.per_page, t.searchForm, t.article_id).then(res => {
                    t.feeds.data = res.data
                    t.feeds.total = res.meta.total
                    t.tableLoading = false
                    t.globalFancybox()
                }, function (error) {
                    t.tableLoading = false
                })
            },
            onSortChange: function (data) {
                const order = data.column.key + ',' + data.order
                this.searchForm.order_by = order
                this.getTableDataExcute(this.feeds.current_page)
            },
            switchEnableExcute(index) {
                let t = this
                let new_status = 'T'
                if (t.feeds.data[index].enable === 'T') {
                    new_status = 'F'
                }
                switchEnable(t.feeds.data[index].id, 'articles', new_status).then(res => {
                    t.feeds.data[index].enable = new_status
                    t.$Notice.success({
                        title: res.message
                    })
                })
            },
            destroyExcute(id, key) {
                let t = this
                destroy(id).then(res => {
                    t.feeds.data.splice(key, 1)
                    t.$Notice.success({
                        title: res.message
                    })
                })
            },
            addBtn() {
                this.addModal.show = true
            },
            addModalHide() {
                this.addModal.show = false
            },
            editModalHide() {
                this.editModal.show = false
            },
            showModalClose() {
                this.showInfoModal.show = false
            }
        }
    }
</script>
