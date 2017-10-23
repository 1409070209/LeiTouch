<template>
    <div class="Index">
        <div class="inner-box"
             @touchstart.prevent="touchStart"
             @touchmove.prevent="touchMove"
             @touchend.prevent="touchEnd"
        ></div>
        <alert v-bind:list="logData">这是一个内容</alert>
    </div>
</template>

<script type="text/javascript">
    import Alert from './Alert.vue'
    export default {
        name: 'Index',
        data(){
            return{
                logData: ['这是一个标题','雷诺好叼']
            }
        },
        components: {
            'alert' : Alert
        },
        methods:{
            mouseDown: function (ex ) {
                console.log(ex);
            },
            mouseUp: function (ex) {
                console.log(ex );
            },
            mouseMove: function (ex) {
                console.log(ex );
            },
            touchStart: function (ex) {
                this.logData = [];
                for (let i = 0; i < ex.changedTouches.length; i++) {
                    let item = ex.changedTouches[i];
                    this.logData.push(`第${i}个手指点击`)
                    this.logData.push(item.clientX)
                    this.logData.push(item.clientY)
                }
            },
            touchMove: function (ex) {
                this.logData = [];
                let target = ex.changedTouches[0].target;
                target.style.position = 'absolute';
                target.style.left = '10px';
                for (let i = 0; i < ex.changedTouches.length; i++) {
                    let item = ex.changedTouches[i]
                    this.logData.push(`第${i}个手指`);
                    this.logData.push(item.clientX);
                    this.logData.push(item.clientY);
                }
            },
            touchEnd: function (ex) {
                let target = ex.changedTouches[0].target;
                target.style.position = '';
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