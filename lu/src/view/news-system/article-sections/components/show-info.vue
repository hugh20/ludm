<template>
<div>
  <Drawer :closable="true" v-model="show" @on-close='closed' title="详情" :width="platformIsPc?30:80">
    <p class="drawer-title">基本资料：</p>
    <div class="drawer-profile">
      <Row>
        <Col span="12"> Slug: {{info.slug}} </Col>
        <Col span="12"> 作者： {{info.user.name}} </Col>
        <Col span="12"> 访问方式：
        <span class="green-color" v-if="info.access_type == '0' "> 免费  </span>
        <span class="green-color" v-else-if="info.access_type == '1' ">  VIP  </span>
        <span class="green-color" v-else>  付费  </span>
        </Col>
      </Row>
      <hr class="hr-line-0">
      <p class="drawer-title">内容：</p>

      <p class="content">
        <parse :content="info.content.raw"></parse>
      </p>
    </div>
  </Drawer>
</div>
</template>
<script>
import Parse from '_c/common/parse'
export default {
  props: {
    info: {
      type: Object,
      default: ''
    }
  },
  components: {
    Parse
  },
  data() {
    return {
      show: true,
      agreement: '',
      spinLoading: true
    }
  },
  created() {},
  computed: {
    platformIsPc: function() {
      return this.globalPlatformType() == 'pc' ? true : false
    }
  },
  methods: {
    closed() {
      this.show = false
      this.$emit('show-modal-close')
    }
  }
}
</script>
