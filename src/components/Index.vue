<template>
    <div>
        <div class="Index" ref="innerBox">
        </div>
        <alert v-bind:list="logData">这是一个内容</alert>
    </div>
</template>

<script type="text/javascript">
    import Alert from './Alert.vue';
    import DoubleClick from '../LeiTouch/Click/DoubleClick'
    export default {
        name: 'Index',
        data(){
            return{
                logData: []
            }
        },
        components: {
            'alert' : Alert
        },
        mounted(){
            this.init();
        },
        methods:{
            init: function () {
                new DoubleClick(this.$refs.innerBox,() => {
                    this.logData.push('你的手速太吊了，已经执行了双击事件哦');
                })
            }
        }
    }
</script>

<style>
    .Index{
        width: 800px;
        height: 800px;
        background: red;
    }
    .Index .inner-box{
        width: 300px;
        height: 300px;
        background: black;
    }
</style>