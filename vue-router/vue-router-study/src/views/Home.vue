<template>
    <div>
        <div class="home">
            <Sidebar class="sidebar" :menus="menus"></Sidebar>
            <div class="container">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .home{ display: flex }
    .home .sidebar{ flex: 2; } 
    .home .container{ flex: 8; padding: 15px 5px 0; }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

<script>
import Sidebar from "../components/Sidebar.vue";
export default {
    data() {
        return {
            menus: [{
                title: '我的资料',
                url: '/profile/1',
            }, {
                title: 'Vue',
                url: '/article/vue'
            }, {
                title: 'Vue router',
                url: '/article/vue-router'
            }, {
                title: 'Vuex',
                url: '/article/vuex'
            }, {
                title: '其它文章',
                url: '/article'
            }, {
                title: '退出登录',
                url: '/login'
            }]
        };
    },
    components: {
        Sidebar
    },
    beforeRouteEnter (to, from, next){
        next(vm => {
            vm.$router.push(`/profile/1`)
        })
    }
}
</script>

