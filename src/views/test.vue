<template>
  <div id="test">
    <div class="banner">
      <div class="banner-mask">
        <div class="img1">
          <img :src="img1" alt="img1" width="297px" />
        </div>
        <div class="banner-bottom">
          <div v-for="(item,index) in bannerImgList" :key="index" @click="menu(index)" class="box">
            <img :src="item.imgUrl" :alt="index" width="70%" />
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="my-title">
      <h1>骨骼发育特性</h1>
    </div>
    <div class="margin-lr-P5">
      <div v-for="(item,index) in tzList" :key="index" class="container">
        <div class="image">
          <img :src="item.imgUrl" :alt="index" width="50px"/>
        </div>
        <div class="text">
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    <div class="my-title">
      <h1>骨骼测评的组成</h1>
    </div>
    <van-swipe :loop="false" :width="120" :show-indicators="false" :stop-propagation="false">
      <van-swipe-item @click="menu(index)" v-for="(item,index) in zcList" :key="index">
        <div class="guge-zc">
          <img :src="item.imgUrl" :alt="index" />
          <p>{{item.title}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="color_show">
      <div class="my-title">
        <h1>发育型防护气垫</h1>
      </div>
      <div class="text1">扫描下方二维码，了解发育型防护气垫产品</div>
      <div class="text-C margin-tb-20">
        <img src="../images/test/img_erwei.png" alt="ma" width="164px"/>
      </div>
      <div class="text2">扫码进入小程序</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img1: require("../images/test/text_img.png"),
      bannerImgList: [
        { name: "足部测评", imgUrl: require("../images/test/img_zb.png") },
        { name: "下肢测评", imgUrl: require("../images/test/img_xz.png") },
        { name: "躯干测评", imgUrl: require("../images/test/img_qg.png") },
        { name: "基础测评", imgUrl: require("../images/test/img_jc.png") }
      ],
      tzList: [
        {
          imgUrl: require("../images/test/icon_1.png"),
          title: "持续性",
          text:
            "骨骼发育是一个持续的动态变化过程不同的生长周期，各部位的生长速度也有差异。"
        },
        {
          imgUrl: require("../images/test/icon_2.png"),
          title: "影响性",
          text:
            "骨骼发育过程中一旦出现问题，必然会对孩子的身高身形及健康产生长期影响。"
        },
        {
          imgUrl: require("../images/test/icon_3.png"),
          title: "相关性",
          text:
            "骨骼之间彼此关联互相牵涉，某一部位出现问题，必然会影响其他的部位。"
        },
        {
          imgUrl: require("../images/test/icon_4.png"),
          title: "生长不可逆性",
          text:
            "骨骼的生长发育是绝对的不可逆过程，不要因为“忽视”错失“发育”良机。"
        },
        {
          imgUrl: require("../images/test/icon_5.png"),
          title: "美观性",
          text:
            "儿童青少年时期骨骼生长快，变化快，良好的骨骼力线是决定孩子身高身形的重要因素。"
        }
      ],
      zcList: [
        {
          imgUrl: require("../images/test/kp_zb.png"),
          title: "足部测评"
        },
        {
          imgUrl: require("../images/test/kp_xz.png"),
          title: "下肢测评"
        },
        {
          imgUrl: require("../images/test/kp_qg.png"),
          title: "躯干测评"
        },
        {
          imgUrl: require("../images/test/kp_jc.png"),
          title: "基础测评"
        }
      ]
    };
  },
  methods: {
    menu(index) {
      console.log(index);
      this.$router.push({name:'type',query: {id:index}})
      this.$store.commit('changeTitle',"测评类型")
    },
  }
};
</script>
<style lang="scss" scoped>
#test {
  margin-top: 4rem;
}
.banner {
  width: 100%;
  height: 610px;
  background: url(../images/animation.gif) no-repeat center;
  background-size: 100% 100%;
  position: relative;
}
.banner-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  .banner-bottom {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    background-color: rgba(110, 143, 2, 0.8);
    padding: 1.8rem 0 1.7rem;
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content: center;
    .box {
      width: 25%;
      text-align: center;
      color: #ffffff;
      font-size: 1.5rem;
      letter-spacing: 1px;
    }
  }
}
.img1 {
  text-align: center;
  padding: 60px 0;
}
.container {
  margin: 2rem 0;
  // text-align: center;
  .image {
    display: inline-block;
    vertical-align: middle;
    width: 20%;
  }
  .text {
    display: inline-block;
    vertical-align: middle;
    width: 65%;
    margin-left: 1rem;
    text-align: left;
    h3 {
      margin: 0;
      letter-spacing: 1px;
      font-size: 1.7rem;
      font-weight:bold;
      color:rgba(91,91,91,1);
      margin-bottom: 1.5rem;
    }
    p {
      font-size:1.3rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(131,131,131,1);
      line-height:2.5rem;
    }
  }
}
.guge-zc {
  width: 120px;
  text-align: center;
  font-size: 1.5rem;
  img {
    width: 106px;
  }
}
.color_show {
  margin-top: 2rem;
  padding-top: 10rem;
  width: 100%;
  background: url(../images/img_shui.png) no-repeat top;
  background-size: 100% 150px;
}
.text1 {
  text-align: center;
  font-size:1.4rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.text2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
}
</style>