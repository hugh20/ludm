<template>
<div>
  <Row :gutter="24">
    <Col :xs="3" :lg="3" >
    <Select v-model="searchForm.enable" placeholder="请选择状态">
        <Option value="" key="">全部</Option>
        <Option v-for="(item,key) in tableStatus.enable" :value="key" :key="key">{{ item }}</Option>
      </Select>
    </Col>
    <Col :xs="6" :lg="3" class="hidden-mobile">
    <Input icon="search" placeholder="请输入邮箱搜索..." v-model="searchForm.email" />
    </Col>
    <Col :xs="6" :lg="3" class="hidden-mobile">
    <Input icon="search" placeholder="请输入用户名搜索..." v-model="searchForm.name" />
    </Col>
    <Col :xs="3" :lg="3" >
    <Button type="primary" icon="ios-search" @click="getTableDataExcute(feeds.current_page)">Search</Button>
    </Col>
  </Row>
  <br>

  <Row>
    <div class="demo-spin-container" v-if="tableLoading">
      <Spin fix>
        <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
        <div>加载中...</div>
      </Spin>
    </div>
    <Table border :columns="columns" :data="feeds.data" @on-sort-change='onSortChange'></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="feeds.total" :current="feeds.current_page" :page-size="feeds.per_page" class="paging" show-elevator show-total show-sizer @on-change="handleOnPageChange" @on-page-size-change='onPageSizeChange'></Page>
      </div>
    </div>
  </Row>

  <Modal v-model="modalHeadImage.show">
    <p slot="header">图片预览</p>
    <div class="text-center">
      <img :src="modalHeadImage.url" alt="" v-if="modalHeadImage.show" class="center-align" style="width:100%">
    </div>
    <div slot="footer">
    </div>
  </Modal>

  <edit-component v-if='editModal.show' :modal-id='editModal.id' @on-edit-modal-success='getTableDataExcute(feeds.current_page)' @on-edit-modal-hide="editModalHide"> </edit-component>

</div>
</template>


<script>
import EditComponent from './components/edit'

import {
  getTableData,
  destroy
} from '@/api/vip'

import {
  getTableStatus,
  switchEnable
} from '@/api/common'

export default {
  components: {
    EditComponent
  },
  data() {
    return {
      searchForm: {
        order_by: 'created_at,desc',
          email: '',
          name: '',
          enable:''
      },
      tableLoading: false,
      tableStatus: {
        enable: [],
        is_admin: [],
      },
      feeds: {
        data: [],
        total: 0,
        current_page: 1,
        per_page: 10
      },
      modalHeadImage: {
        show: false,
        url: null
      },
      addModal: {
        show: false
      },
      editModal: {
        show: false,
        id: 0
      },
      columns: [{
          title: 'ID',
          key: 'id',
          sortable: 'customer',
          minWidth: 100,
        },
        {
          title: '昵称',
          key: 'name',
          minWidth: 100,
        },
        {
          title: '头像',
          key: '',
          minWidth: 150,
          render: (h, params) => {
            let t = this
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.head_image.url,
                  'data-fancybox': '12312'
                },
                class: 'head_image',
                style: {
                  width: '40px',
                  height: '40px'
                },
                on: {
                  click: (value) => {
                    t.modalHeadImage.show = true
                    t.modalHeadImage.url = params.row.head_image.url
                  }
                }
              }),
            ])
          }
        },
        {
          title: '邮箱',
          key: 'email',
          minWidth: 150,
        },
        {
          title: '启用状态',
          key: 'enable',
          minWidth: 150,
          render: (h, params) => {
            return h('i-switch', {
              props: {
                slot: 'open',
                type: 'primary',
                value: params.row.enable === 'T', //控制开关的打开或关闭状态，官网文档属性是value
              },
              on: {
                'on-change': (value) => {
                  this.switchEnableExcute(params.index)
                }
              }
            })
          }
        },
        {
          title: '操作',
          key: '',
          minWidth: 200,
          render: (h, params) => {
            let t = this
            return h('div', [
              h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.editModal.show = true
                    this.editModal.id = params.row.id
                  }
                }

              }, '修改'),

              h('Poptip', {
                props: {
                  confirm: true,
                  title: '您确定要删除「' + params.row.name + '」？',
                  transfer: true
                },
                on: {
                  'on-ok': () => {
                    t.destroyExcute(params.row.id, params.index)
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
            ])
          }
        }
      ],

    }
  },
  created() {
    let t = this
    t.getTableStatusExcute('users');
    t.getTableDataExcute(t.feeds.current_page);
  },
  methods: {
    handleOnPageChange: function(to_page) {
      this.getTableDataExcute(to_page)
    },
    onPageSizeChange: function(per_page) {
      this.feeds.per_page = per_page
      this.getTableDataExcute(this.feeds.current_page)
    },
    getTableStatusExcute(params) {
      let t = this
      getTableStatus(params).then(res => {
        t.tableStatus.enable = res.data.enable
        t.tableStatus.is_admin = res.data.is_admin
      })
    },
    getTableDataExcute(to_page) {
      let t = this
      t.tableLoading = true
      t.feeds.current_page = to_page
      getTableData(to_page, t.feeds.per_page, t.searchForm).then(res => {
        t.feeds.data = res.data
        t.feeds.total = res.meta.total
        t.tableLoading = false
      }, function(error) {
        t.tableLoading = false
      })

    },
    onSortChange: function(data) {
      const order = data.column.key + ',' + data.order
      this.searchForm.order_by = order
      this.getTableDataExcute(this.feeds.current_page)
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
    editModalHide() {
      this.editModal.show = false
    }
  },
}
</script>
