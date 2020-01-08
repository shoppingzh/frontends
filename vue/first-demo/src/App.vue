<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Article v-bind:title="article ? article.title : ''" v-bind:content="article ? article.content : ''"></Article>
  </div>
</template>

<script>

import Article from './components/Article.vue'
// import { log } from 'util';

export default {
  name: 'app',
  components: {
    Article
  },
  data: function(){
    return {
      article: null
    };
  },
  mounted: function(){
    var _self = this;
    this.$http.get('./data/article.json').then(function(result){
      _self.article = result.data;
    })
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
