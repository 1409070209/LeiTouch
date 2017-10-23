
<template>
    <div class="MouseEvent">
        <index mouseDown="mouseDown"
               mouseUp="mouseUp"
               mouseMove="mouseMove"
        ></index>
    </div>
</template>

<script type="text/javascript">
    import Index from './Index.vue'
    export default {
        name: 'MouseEvent',
        methods: {
            mouseDown: function (ex ) {
                console.log(ex);
            },
            mouseUp: function (ex) {
                console.log(ex );
            },
            mouseMove: function (ex) {
                console.log(ex );
            }
        },
        components: {
            'index' : Index
        }
    }
</script>