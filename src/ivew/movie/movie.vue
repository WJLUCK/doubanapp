<template>
  <div class="movie">
    <div class="card">
      <section class="movie-showing border-bottom">
        <header style="padding-top:.2rem">
          <span>影院热映</span>
          <a href="/">更多</a>
        </header>
        <div class="section-content" ref="wrapper">
          <ul>
            <li v-for="(item,index) in hotList" :key="index">
              <img :src="item.images.large" alt="">
              <div class="section-title">{{item.title}}</div>
              <div class="iconfont star" style="margin-top:0.06rem">
                <span v-for="(item,index) in items[index]" :key="index">
                  <span> &#xe650;</span>
                </span>
                <span style="color:#aaa;" v-if="item.rating.average != 0">
                  {{item.rating.average}}
                </span>
                <span v-else style="color:#aaa">暂无评分</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="card">
      <section class="movie-showing border-bottom">
        <header style="padding-top:.2rem">
          <span>影院热映</span>
          <a href="/">更多</a>
        </header>
        <div class="section-content" ref="wrapper2">
          <ul>
            <li v-for="(item,index) in hotList" :key="index">
              <img :src="item.images.large" alt="">
              <div class="section-title">{{item.title}}</div>
              <div class="iconfont star" style="margin-top:0.06rem">
                <span v-for="(item,index) in items[index]" :key="index">
                  <span> &#xe650;</span>
                </span>
                <span style="color:#aaa;" v-if="item.rating.average != 0">
                  {{item.rating.average}}
                </span>
                <span v-else style="color:#aaa">暂无评分</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="card">
      <section class="movie-showing border-bottom">
        <header style="padding-top:.2rem">
          <span>影院热映</span>
          <a href="/">更多</a>
        </header>
        <div class="section-content" ref="wrapper3">
          <ul>
            <li v-for="(item,index) in hotList" :key="index">
              <img :src="item.images.large" alt="">
              <div class="section-title">{{item.title}}</div>
              <div class="iconfont star" style="margin-top:0.06rem">
                <span v-for="(item,index) in items[index]" :key="index">
                  <span> &#xe650;</span>
                </span>
                <span style="color:#aaa;" v-if="item.rating.average != 0">
                  {{item.rating.average}}
                </span>
                <span v-else style="color:#aaa">暂无评分</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="card">
      <section class="movie-showing border-bottom">
        <header style="padding-top:.2rem">
          <span>影院热映</span>
          <a href="/">更多</a>
        </header>
        <div class="section-content" ref="wrapper4">
          <ul>
            <li v-for="(item,index) in hotList" :key="index">
              <img :src="item.images.large" alt="">
              <div class="section-title">{{item.title}}</div>
              <div class="iconfont star" style="margin-top:0.06rem">
                <span v-for="(item,index) in items[index]" :key="index">
                  <span> &#xe650;</span>
                </span>
                <span style="color:#aaa;" v-if="item.rating.average != 0">
                  {{item.rating.average}}
                </span>
                <span v-else style="color:#aaa">暂无评分</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div style="height:1.3rem"></div>
  </div>
</template>


<script>
import axios from "axios";
import { getList } from "@/utils/api.js";
import request from "@/utils/request.js";
import BScroll from "better-scroll";
export default {
  name: "movie",
  data() {
    return {
      hotList: [],
      items: ""
    };
  },
  computed: {
    star: function() {
      let star = [];
    }
  },
  mounted() {
    this.movie_show();
    this.init();
  },
  methods: {
    movie_show() {
      axios.get("/api/movie/in_theaters").then(res => {
        this.hotList = res.data.subjects;
        let items = [];
        for (let i = 0; i < 20; i++) {
          let item = Math.floor(this.hotList[i].rating.average / 2);
          items.push(item);
        }
        this.items = items;
      });
    },
    init() {
      let scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true
      });
      let scroll2 = new BScroll(this.$refs.wrapper2, {
        scrollX: true
      });
      let scroll3 = new BScroll(this.$refs.wrapper3, {
        scrollX: true
      });
      let scroll4 = new BScroll(this.$refs.wrapper4, {
        scrollX: true
      });
    }
  }
};
</script>


<style lang="less" scoped>
.movie {
  margin: 0.1rem;
  font-weight: normal;
  font-weight: 400;
  color: #111;
  .card {
    span {
      font-size: 0.18rem;
    }
    a {
      float: right;
      font-size: 0.16rem;
      color: #42bd56;
      text-decoration: none;
    }
    .section-content {
      margin-top: 0.1rem;
      height: 2.2rem;
      overflow-x: scroll;
      ul {
        float: left;
        list-style: none;
        overflow-y: hidden;
        white-space: nowrap;
        li {
          display: inline-block;
          margin-right: 0.1rem;
          height: 1.48rem;
          img {
            width: 1rem;
            height: 1.42rem;
          }
          .section-title {
            width: 1rem;
            margin-top: 0.1rem;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
.star {
  width: 1rem;
  height: 0.2rem;
  text-align: center;
}
</style>
