<template>
    <ul>
        <li v-for="menu in menus" :key="menu.url">
            <router-link :to="menu.url">{{ menu.title }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        menus: Array
    }
}
</script>

<style scoped>
    ul{ padding:0; margin: 0; background-color: rgb(48, 65, 86); cursor: pointer; }
    ul li{ list-style: none; line-height: 55px; }
    ul li:hover{ background-color: #263445; }
    ul li a{ display: block; text-decoration: none; font-size: 14px; color: #ddd; }
</style>