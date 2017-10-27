<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    ul, li, td, tr, input, p, h1, h2, h3, h4, h5, h6, form, input, img, a, body, button {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    #root p {
        font-size: 3rem;
    }

    .clear:after {
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
        content: '.';
    }

    .clear {
        zoom: 1;
    }

    .float-left {
        float: left;
    }

    .text-center {
        text-align: center;
    }
</style>

