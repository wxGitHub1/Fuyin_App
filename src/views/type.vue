<template>
  <div id="type">
    <div v-if="isIndex==0">
      <div class="titleImg">
        <img src="../images/type/zubu/title.png" alt="1" />
      </div>
      <div class="my-title">
        <h1>足部发育测评</h1>
      </div>
      <div
        class="next_introduce"
      >通过对足部在静态及动态下所采集的130多组数据进行组合分析，分析足部各区域受力的分布情况、面积大小、重心位置，以及双足之间的压力差异及其影响，并对比正常的发育指数，给出足弓及足跟发育的 建议，指导健康发育。</div>
      <div class="my-title">
        <h1>测评项介绍</h1>
      </div>
      <van-swipe :loop="false" :width="120" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in zcList" :key="index">
          <div class="guge-zc">
            <img :src="item.imgUrl" :alt="index" />
            <p>{{item.title}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="my-title">
        <h1>匹配建议</h1>
      </div>
      <div class="titleImg">
        <img src="../images/type/zubu/pipe.png" alt="1" />
      </div>
      <div class="banner-bottom">
        <div v-for="(item,index) in bannerImgList_1" :key="index" @click="menu(index)" class="box">
          <img :src="item.imgUrl" :alt="index" width="70%" />
        </div>
      </div>
    </div>
    <div v-if="isIndex==1">
      <div class="titleImg">
        <img src="../images/type/xiazhi/title.png" alt="1" />
      </div>
      <div class="my-title">
        <h1>下肢发育测评</h1>
      </div>
      <div
        class="next_introduce"
      >通过对下肢在矢状面、冠状面、水平面的不同状态下所采集的数据，并结合其相关的其他部位的测评数据将多组数据进行组合分析，指导健康发育。 建议，指导健康发育。</div>
      <div class="my-title">
        <h1>测评项介绍</h1>
      </div>
      <van-swipe :loop="false" :width="120" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in zcList" :key="index">
          <div class="guge-zc">
            <img :src="item.imgUrl" :alt="index" />
            <p>{{item.title}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="my-title">
        <h1>匹配建议</h1>
      </div>
      <div class="titleImg">
        <img src="../images/type/xiazhi/pipe.png" alt="1" />
      </div>
      <div class="banner-bottom">
        <div v-for="(item,index) in bannerImgList_2" :key="index" @click="menu(index)" class="box">
          <img :src="item.imgUrl" :alt="index" width="70%" />
        </div>
      </div>
    </div>
    <div v-if="isIndex==2">
      <div class="titleImg">
        <img src="../images/type/qugan/title.png" alt="1" />
      </div>
      <div class="my-title">
        <h1>躯干发育测评</h1>
      </div>
      <div
        class="next_introduce"
      >通过对躯干在不同的体位下进行的活动度实时数据采集，并结合其相关的其他部位的测评数据，将多组数据进行组合分析，指导健康发育。 建议，指导健康发育。</div>
      <div class="my-title">
        <h1>测评项介绍</h1>
      </div>
      <van-swipe :loop="false" :width="120" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in zcList" :key="index">
          <div class="guge-zc">
            <img :src="item.imgUrl" :alt="index" />
            <p>{{item.title}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="my-title">
        <h1>匹配建议</h1>
      </div>
      <div class="titleImg">
        <img src="../images/type/qugan/pipe.png" alt="1" />
      </div>
      <div class="banner-bottom">
        <div v-for="(item,index) in bannerImgList_3" :key="index" @click="menu(index)" class="box">
          <img :src="item.imgUrl" :alt="index" width="70%" />
        </div>
      </div>
    </div>
    <div v-if="isIndex==3">
      <div class="titleImg">
        <img src="../images/type/jichu/title.png" alt="1" />
      </div>
      <div class="my-title">
        <h1>基础发育测评</h1>
      </div>
      <div
        class="next_introduce"
      >通过对全身形态及数据的采集获取骨骼发育的基本数据为其他部位测评结果的判断提供参考依据。 建议，指导健康发育。</div>
      <div class="my-title">
        <h1>测评项介绍</h1>
      </div>
      <van-swipe :loop="false" :width="120" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in zcList" :key="index">
          <div class="guge-zc">
            <img :src="item.imgUrl" :alt="index" />
            <p>{{item.title}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="my-title">
        <h1>匹配建议</h1>
      </div>
      <div class="titleImg">
        <img src="../images/type/jichu/pipe.png" alt="1" />
      </div>
      <div class="banner-bottom">
        <div v-for="(item,index) in bannerImgList_4" :key="index" @click="menu(index)" class="box">
          <img :src="item.imgUrl" :alt="index" width="70%" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isIndex: 3,
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
      ],
      bannerImgList_1: [
        { name: "足部测评", imgUrl: require("../images/type/zubu/icon_1.png") },
        { name: "下肢测评", imgUrl: require("../images/type/zubu/icon_2.png") },
        { name: "躯干测评", imgUrl: require("../images/type/zubu/icon_3.png") },
        { name: "基础测评", imgUrl: require("../images/type/zubu/icon_4.png") }
      ],
      bannerImgList_2: [
        { name: "足部测评", imgUrl: require("../images/type/xiazhi/icon_1.png") },
        { name: "下肢测评", imgUrl: require("../images/type/xiazhi/icon_2.png") },
        { name: "躯干测评", imgUrl: require("../images/type/zubu/icon_3.png") },
        { name: "基础测评", imgUrl: require("../images/type/zubu/icon_4.png") }
      ],
      bannerImgList_3: [
        { name: "足部测评", imgUrl: require("../images/type/xiazhi/icon_1.png") },
        { name: "下肢测评", imgUrl: require("../images/type/zubu/icon_2.png") },
        { name: "躯干测评", imgUrl: require("../images/type/qugan/icon_3.png") },
        { name: "基础测评", imgUrl: require("../images/type/xiazhi/icon_4.png") }
      ],
      bannerImgList_4: [
        { name: "足部测评", imgUrl: require("../images/type/xiazhi/icon_1.png") },
        { name: "下肢测评", imgUrl: require("../images/type/zubu/icon_2.png") },
        { name: "躯干测评", imgUrl: require("../images/type/zubu/icon_3.png") },
        { name: "基础测评", imgUrl: require("../images/type/jichu/icon_4.png") }
      ],
    };
  },
  mounted() {
    this.isIndex=this.$route.query.id
  },
  methods: {
    menu(index){
      this.isIndex=index
    }
  }
};
</script>
<style lang="scss" scoped>
#type {
  margin-top: 2.5rem;
}
.titleImg {
  text-align: center;
  padding: 20px 0;
}
.next_introduce {
  width: 77%;
  margin: 0 auto;
  font-size: 0.9rem;
  letter-spacing: 1px;
  line-height: 1.6rem;
  padding: 20px 0;
}
.banner-bottom {
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid rgba(1, 1, 1, 0.2);
  padding: 1.8rem 0 1.7rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  .box {
    width: 25%;
    text-align: center;
    color: #ffffff;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
}

.guge-zc {
  width: 120px;
  text-align: center;
  font-size: 15px;
  img {
    width: 106px;
  }
}
</style>