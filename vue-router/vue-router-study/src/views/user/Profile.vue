<template>
    <div>
        <div class="line" v-for="(value, name) in items" :key="name">
            <label v-if="name == 'name'">姓名</label>
            <label v-if="name == 'age'">年龄</label>
            <label v-if="name == 'nation'">民族</label>
            <label v-if="name == 'phone'">手机号</label>
            <label v-if="name == 'email'">邮箱</label>
            <label v-if="name == 'hobbies'">爱好</label>
            <div class="main" v-if="name != 'id'">{{ Array.isArray(value) ? value.join('，') : value }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null
        };
    },
    props: {
        id: String
    },
    created() {
        
    },
    mounted() {
        window.console.log(`用户ID：${this.id}`)
        this.axios.get('/data/profiles.json').then((resp) => {
            var list = resp.data || [];
            list.forEach((obj) => {
                if(obj.id == this.id){
                    this.items = obj;
                }
            })
            
        })
    },
    beforeRouteEnter (to, from, next){
        window.console.log(to)
        next()
    }
}
</script>

<style scoped>
    .line{ display: flex; align-items: center; padding: 10px 5px; border-bottom: 1px solid #f3f4f7; }
    .line label{ flex: 3; text-align: right; font-size: 14px; font-weight: bold; padding-right: 12px; }
    .line .main{ flex: 7; text-align: left; }
</style>