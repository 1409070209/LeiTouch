<template>
    <div class="Alert">
        <div>输出信息为:</div>
        <p v-for="item in list">{{item}}</p>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'Alert',
        props: ['list']
    }
</script>

<style>
    .Alert{
        background: white;
        font-size: 4rem;
    }
    .Alert p{
        font-size: 3rem;
        border: 2px solid;
    }
</style>