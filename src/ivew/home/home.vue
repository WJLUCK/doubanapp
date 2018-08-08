<template>
  <div class="home">
    <div class="home-title">
      <ul>
        <li>
          <a href="">影院热映</a>
        </li>
        <li>
          <a href="">近期值得看的国产剧</a>
        </li>
        <li>
          <a href="">豆瓣时间</a>
        </li>
        <li>
          <a href="">使用豆瓣App</a>
        </li>
      </ul>
    </div>
    <section>
      <div class="recommend border-bottom" v-for="(item,index) in recommendList" :key="index">
        <div class="recommend-content" v-if="item.target.cover_url">
          <div class="recommend-title">
            {{item.title}}
          </div>
          <div class="recommend-desc">
            <p>{{item.target.desc}}</p>
          </div>
          <div class="recommend-author">
            <p>by {{item.target.author.name}}</p>
          </div>
        </div>
        <div class="recommend-contentchange" v-else>
          <div class="recommend-title">
            {{item.title}}
          </div>
          <div class="recommend-desc">
            <p>{{item.target.desc}}</p>
          </div>
          <div class="recommend-author">
            <p>by {{item.target.author.name}}</p>
          </div>
        </div>
        <div class="recommend-pic" v-if="item.target.cover_url">
          <img :src="item.target.cover_url" alt="">
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";
// import { BScroll } from "better-scroll";
import { setTimeout } from "timers";
export default {
  name: "home",
  data() {
    return {
      recommendList: []
    };
  },
  computed: {},
  mounted() {
    this.getRecommend();
  },
  methods: {
    getRecommend() {
      axios.get("./static/mock/recommend.json").then(res => {
        this.recommendList = res.data.recommend_feeds;
        // console.log(this.recommendList);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  margin-top: 0.3rem;
  &-title {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    height: 1rem;
    margin: 0 auto;
    ul li {
      width: 48%;
      font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
      background-color: #f6f6f6;
      color: #494949;
      display: block;
      text-align: center;
      line-height: 20px;
      padding: 12px 0;
      border-radius: 2px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      margin-left: 1%;
      margin-right: 1%;
      margin-bottom: 1%;
      float: left;
    }
    a {
      color: #111;
      text-decoration: none;
    }
  }
  .recommend {
    width: 100%;
    height: 1.58rem;
    margin-bottom: 0.1rem;
    position: relative;
    &-content {
      width: 70%;
      height: 1.58rem;
      float: left;
    }
    &-contentchange {
      width: 100%;
      height: 1.58rem;
    }
    &-pic {
      width: 26%;
      height: 1rem;
      float: right;
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
        overflow: hidden;
        padding-top: 0.1rem;
      }
    }
  }
}
.recommend-title {
  padding-top: 0.1rem;
  padding-left: 0.1rem;
  line-height: 0.22rem;
  font-size: 0.18rem;
}
.recommend-desc {
  margin-left: 0.1rem;
  line-height: 0.2rem;
  color: #aaa;
  > p {
    margin-top: 0.1rem;
    height: 100%;
    overflow: hidden;
    font-size: 0.12rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
.recommend-author {
  position: absolute;
  left: 0.1rem;
  bottom: 0.15rem;
  font-size: 0.12rem;
  color: #ccc;
}
</style>
