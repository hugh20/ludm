<template>
    <div>
        <Modal v-model="modalShow" :closable='false' :mask-closable=false width="600">
            <p slot="header">添加</p>
            <Form ref="formData" :model="formData" label-position="left" :label-width="100">
                <FormItem label="昵称：" prop="name">
                    <Input :value="user.name" readonly></Input>
                </FormItem>
                <FormItem label="邮箱：">
                    <Input :value="user.email" readonly></Input>
                </FormItem>
                <FormItem label="VIP有效期：" prop="expire">
                    <DatePicker type="daterange" :options="options" placement="bottom-end" placeholder="Select date"
                                style="width: 200px" v-model="effectiveDate"></DatePicker>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="addExcute" :loading='saveLoading'>保存 </Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import {
        add
    } from '@/api/vip'

    export default {
        props: {
            user: {
                type: Object,
                default: {name:'', email:'', id: 0}
            }
        },
        data() {
            return {
                modalShow: true,
                saveLoading: false,
                effectiveDate: ['', ''],
                formData: {
                    started_at: '',
                    expired_at: '',
                    user_id:0,
                    level:7
                },
                options: {
                    shortcuts: [
                        {
                            text: '1 month',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                end.setTime(end.getTime() +  86400000 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                end.setTime(end.getTime() +  86400000 * 91);
                                return [start, end];
                            }
                        },
                        {
                            text: '6 months',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                end.setTime(end.getTime() + 86400000 * 183);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 year',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                end.setTime(end.getTime() + 86400000 * 365);
                                return [start, end];
                            }
                        },
                        {
                            text: '2 year',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                end.setTime(end.getTime() + 86400000 * 365 * 2);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        },
        methods: {
            addExcute() {
                let t = this;
                t.saveLoading = true;
                if(t.effectiveDate[0] instanceof Date){
                    t.formData.started_at = t.effectiveDate[0].getTime() / 1000;
                }else{
                    t.formData.started_at = t.effectiveDate[0];
                }

                if(t.effectiveDate[1] instanceof Date){
                    t.formData.expired_at = t.effectiveDate[1].getTime() / 1000;
                }else{
                    t.formData.expired_at = t.effectiveDate[1];
                }
                if(!t.formData.expired_at || !t.formData.started_at){
                    t.saveLoading = false;
                    t.$Notice.error({
                        title: '出错了',
                        desc: '请先选择有效期'
                    });
                    return;
                }

                add(t.formData).then(res => {
                    t.saveLoading = false;
                    t.modalShow = false;
                    t.$emit('on-add-modal-success');
                    t.$emit('on-add-vip-model-hide');
                    t.$Notice.success({
                        title: res.message
                    })
                }, function (error) {
                    t.saveLoading = false;
                })
            },
            cancel() {
                this.modalShow = false;
                this.$emit('on-add-vip-model-hide');
            }
        },
        mounted: function(){
            this.formData.user_id = this.user.id;
            if(this.user.vip) {
                this.effectiveDate = [this.user.vip.started_at, this.user.vip.expired_at];
            }
            console.log(this.user);
        }
    }
</script>
