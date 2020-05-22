<template>
  <div id="header" class="float clearfix">
    <div class="left">
      <img :src="logo_ImgUrl" alt="logo" />
    </div>
    <div class="right" @click="menu()">
      <img v-if="isShow" :src="heard_right_ImgUrl_close" alt="logo" />
      <img v-else :src="heard_right_ImgUrl" alt="logo" />
    </div>
    <div class="center">{{this.$store.state.header_title}}</div>
    <!-- <div></div> -->
    <!-- 回到顶部 -->
    <div @click="click_fuc" style="position:fixed;right:10px;bottom:10px">
      <img src="../../images/home/back_top.png" alt="回到顶部" width="35px" />
    </div>
    <transition name="fade">
      <div v-show="isShow" class="menu">
        <div
          :class="{active:act==index}"
          @click="menu_item_fuc(index,item)"
          v-for="(item,index) in menuList"
          :key="index"
        >{{item.name}}</div>
      </div>
    </transition>
  </div>
  <!-- <van-nav-bar 
        :left-arrow="leftArrow"
        :left-text="leftText" 
        :border="border" 
        :fixed="fixed" 
        :z-index="zIndex" 
        @click-left="onClickLeft" 
        @click-right="onClickRight"
    >
        <div slot="title">
            <span v-if="titleType == 1">{{title}}</span>
            <slot v-else name="title_slot"></slot>
        </div>
        <div slot="right">
            <span v-if="rightType == 1">{{rightText}}</span>
            <slot v-else name="right_slot"></slot>
        </div>
  </van-nav-bar>-->
</template>

<script>
// import { NavBar } from 'vant';
export default {
  data() {
    return {
      logo_ImgUrl: require("../../images/logo.png"),
      heard_right_ImgUrl: require("../../images/list.png"),
      heard_right_ImgUrl_close: require("../../images/close.png"),
      isShow: false,
      menuList: [
        { name: "首页", go: "home" },
        { name: "骨骼测评", go: "test" },
        { name: "关于我们", go: "fuyin" },
        { name: "联系我们", go: "contact" }
      ],
      act: 0
    };
  },
  mounted() {
    this.menuList.forEach((obj, index) => {
      if (this.$route.name == obj.go) {
        this.$store.commit("changeTitle", obj.name);
        this.act = index;
      }
    });
    if (this.$route.name == "type") {
      this.$store.commit("changeTitle", "测评类型");
      this.act = 1;
    }
  },
  // components:{
  //     [NavBar.name]: NavBar,
  // },
  // props: {
  //     leftArrow: {                    //是否显示左侧箭头
  //         type: Boolean,
  //         default: true
  //     },
  //     rightType: {                    //右侧样式,1文字，其他自定义
  //         type: Number,
  //         default: 1
  //     },
  //     titleType: {                   //标题样式,1文字，其他自定义
  //         type: Number,
  //         default: 1
  //     },
  //     title: {                       //标题内容
  //         type: String,
  //         default: '标题'
  //     },
  //     leftText: {                    //左侧文案
  //         type: String,
  //         default: ''
  //     },
  //     rightText: {                   //右侧文案
  //         type: String,
  //         default: ''
  //     },
  //     border: {                      //是否显示下边框
  //         type: Boolean,
  //         default: false
  //     },
  //     preventGoBack: {               //是否阻止返回
  //         type: Boolean,
  //         default: false
  //     },
  //     fixed: {                       //是否固定在顶部
  //         type: Boolean,
  //         default: true
  //     },
  //     zIndex: {                       //元素 z-index
  //         type: Number,
  //         default: 100
  //     }
  // },
  methods: {
    click_fuc() {
      let timer = null;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        let oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          scrollTo(0, oTop - 50);
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    },

    menu_item_fuc(index, item) {
      this.$router.push({ name: item.go });
      this.$store.commit("changeTitle", item.name);
      this.act = index;
      this.isShow = false;
    },
    menu() {
      this.isShow = !this.isShow;
    }

    // onClickLeft() {
    //     if(this.preventGoBack){
    //         this.$emit('on-click-left');
    //     }else{
    //         this.$router.go(-1);
    //     }
    // },
    // onClickRight() {
    //     this.$emit('on-click-right');
    // }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.left {
  width: 10rem;
  height: 4rem;
  // background-color: #823384;
  text-align: center;
  // font-size: 20px;
  color: #fdf6e3;
}
.center {
  height: 4rem;
  line-height: 4rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 1);
  // line-height:18px;
  // color: #fff;
  text-align: center;
  // background-color: #d29922;
}
.right {
  width: 10rem;
  height: 4rem;
  // background-color: #0c8ac5;
  text-align: center;
  // font-size: 20px;
  color: #fdf6e3;
}
#header {
  position: fixed;
  top: 0;
  width: 100%;
  padding-bottom: 1px;
  // position: relative;
  // top: 0;
  height: 4rem;
  background: #819a35;
  z-index: 10000;
  .menu {
    width: 100%;
    height: 100%;
    background: rgba(97, 112, 48, 0.9);
    position: fixed;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
    top: 4rem;
    div {
      width: 90%;
      // height: 3rem;
      // line-height: 3rem;
      padding: 1.9rem 0;
      margin: 0 auto;
      border-bottom: 1px solid rgba(170,170,170,0.6);
      color: #fff;
    }
    .active {
      color: #9eea6a;
    }
    div > :last-child {
      border-bottom: none;
    }
  }
}
.float .left {
  float: left;
  padding: 0.5rem;
  img {
    height: 100%;
  }
}
.float .right {
  float: right;
  padding: 10px 5px 10px 50px;
  img {
    height: 100%;
  }
}

// .van-nav-bar__left{
//     left: 0;
//     .van-nav-bar__arrow{
//         min-width: 1rem;
//     }
// }
// .van-nav-bar__left,.van-nav-bar__right{
//     .van-icon{
//         font-size: 20px;
//         color: #666;
//     }
// }
</style>