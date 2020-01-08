<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{content}}</p>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: {
        title: {
            type: String,
            default: '默认标题'
        },
        content: {
            type: String,
            default: '这是文章组件的默认内容...'
        }
    }
}
</script>

<style scoped>
    h1{ text-align: center; font-weight: bold; }
</style>