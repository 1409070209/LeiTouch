<template>
    <div>
        <div class="Index" ref="innerBox">
        </div>
        <alert v-bind:list="logData">这是一个内容</alert>
    </div>
</template>

<script type="text/javascript">
    import Alert from './Alert.vue';
    import LongTouch from '../LeiTouch/Touches/LongTouch'
    import DoubleClick from '../LeiTouch/Click/DoubleClick'
    import TouchMove from '../LeiTouch/Touches/TouchMove'

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
                new LongTouch(this.$refs.innerBox ,() => {
                    this.logData.push('已经执行了长按事件');
                })
                new DoubleClick(this.$refs.innerBox , () => {
                    this.logData.push('已经执行了双击事件');
                })
                new TouchMove(this.$refs.innerBox , TouchMove.TOUCH_UP , () => {
                    this.logData.push('已经执行了上拉事件')
                })
                new TouchMove(this.$refs.innerBox , TouchMove.TOUCH_DOWN , () => {
                    this.logData.push('已经执行了下拉事件')
                })
                new TouchMove(this.$refs.innerBox , TouchMove.TOUCH_LEFT , () => {
                    this.logData.push('已经执行了左拉事件')
                })
                new TouchMove(this.$refs.innerBox , TouchMove.TOUCH_RIGHT , () => {
                    this.logData.push('已经执行了右拉事件')
                })
            }
        }
    }
</script>

<style>
    .Index{
        width: 100%;
        height: 800px;
        background: red;
    }
</style>