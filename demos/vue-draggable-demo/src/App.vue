<template>
  <div id="app">
      <div class="app-container">
        <div class="left">
          <draggable v-model="leftList" group="column" @start="drag = true" @end="handleEnd" ghost-class="ghost">
            <transition-group type="transition" name="flip-list">
              <panel
                v-for="item in leftList"
                :key="item.id"
                :title="item.name"
                :height="item.height"></panel>
              <div v-if="!leftList.length" style="height: 10px;" key="left-default"></div>
            </transition-group>
          </draggable>
        </div>
        <div class="center">
          <draggable v-model="centerList" group="column" @start="drag = true" @end="handleEnd" ghost-class="ghost">
            <transition-group type="transition" name="flip-list">  
              <panel
                v-for="item in centerList"
                :key="item.id"
                :title="item.name"
                :height="item.height"></panel>
              <div v-if="!centerList.length" style="height: 10px;" key="center-default"></div>
            </transition-group>
          </draggable>

        </div>
        <div class="right">
          <draggable v-model="rightList" group="column" @start="drag = true" @end="handleEnd" ghost-class="ghost">
            <transition-group type="transition" name="flip-list">
              <panel
                v-for="item in rightList"
                :key="item.id"
                :title="item.name"
                :height="item.height"></panel>
              <div v-if="!rightList.length" style="height: 10px;" key="right-default"></div>
            </transition-group>
          </draggable>
        </div>
      </div>
  </div>
</template>

<script>

import Draggable from 'vuedraggable'
import Panel from './components/Panel'

export default {
  name: 'app',
  data() {
    return {
      leftList: [
        {
          id: 1,
          name: '课程团队',
          height: 45
        },
        {
          id: 2,
          name: '在线作业',
          height: 15
        },
        {
          id: 3,
          name: '在线测验',
          height: 15
        },
        {
          id: 4,
          name: '交流论坛',
          height: 30
        }
      ],
      centerList: [
        {
          id: 15,
          name: '新闻公告',
          height: 25
        },
        {
          id: 16,
          name: '课程简介',
          height: 250
        },
        {
          id: 17,
          name: '系统访问统计',
          height: 100
        },
        {
          id: 18,
          name: '移动学习',
          height: 75
        }
      ],
      rightList: [
        {
          id: 30,
          name: '优秀学员',
          height: 135
        }
      ],
      drag: false
    };
  },
  watch: {
    drag(newVal) {
      window.console.log(newVal)
    }
  },
  methods: {
    handleEnd() {
      window.console.log(this.leftList)
      window.console.log(this.centerList)
      window.console.log(this.rightList)
    }
  },
  components: {
    Draggable,
    Panel
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

/* .items { margin: 0; padding: 0; border: 1px solid #eee; }
.items>.item { list-style-type: none; padding: 10px 5px; cursor: all-scroll; }
.items>.item:not(:last-child) {  border-bottom: 1px solid #eee; } */

.ghost { opacity: .5; background-color: darkseagreen; }


.app-container{ display: flex; min-height: 200px; margin: 0 15%; }
.app-container .left{ flex: 3; }
.app-container .center{ flex: 5; }
.app-container .right{ flex: 2; }

.app-container .left, .app-container .center, .app-container .right{ margin: 0 5px; }

.panel{ cursor: all-scroll; }

.flip-list-move {
  transition: transform 0.5s;
}


</style>
