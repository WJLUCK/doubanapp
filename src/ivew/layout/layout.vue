<template>
  <div class="layout">
    <div class="header border-bottom">
      <div class="header-primary">
        <router-link tag="a" to="/home">
          豆瓣
        </router-link>
      </div>
      <div class="header-secondary">
        <ul>
          <li>
            <router-link to="/movie" tag="span" style="color:#2384E8;">电影</router-link>
          </li>
          <li>
            <a href="" style="color:#9F7860;">图书</a>
          </li>
          <li>
            <a href="" style="color:#E4A813;">广播</a>
          </li>
          <li>
            <a href="" style="color:#2AB8CC;">小组</a>
          </li>
          <li>
            <router-link tag="span" to="/login">@.@</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container" ref="wrapper">
      <div>
        <router-view/>
      </div>
      <!-- <ul>
        <li>1</li>
        <li>2</li>
      </ul> -->

    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            scrollY: true
            // click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
};
</script>


<style lang="less" scoped>
.header {
  height: 0;
  overflow: hidden;
  padding-bottom: 0.47rem;
  &-primary {
    font-size: 24px;
    line-height: 0.47rem;
    float: left;
    a {
      color: #00b600;
      text-decoration: none;
      padding-left: 0.1rem;
    }
  }
  &-secondary {
    ul {
      float: right;
      line-height: 0.47rem;
      li {
        float: left;
        margin-right: 0.2rem;
        a {
          text-decoration: none;
        }
      }
    }
  }
}
.container {
  width: 100%;
  height: 100vh;
  // height: 400px;
  overflow: hidden;
  position: absolute;
  // background: pink;
  top: 0.47rem;
  ul li {
    height: 1000px;
  }
}
</style>
