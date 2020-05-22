<template>
  <div id="type">
    <div v-if="isIndex==0">
      <div class="titleImg">
        <img src="../images/type/zubu/title.png" alt="1" width="150px" />
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
      <van-swipe :loop="false" :width="300" :show-indicators="false" :stop-propagation="false">
        <van-swipe-item v-for="(item,index) in zcList" :key="index">
          <div class="cpx">
            <h1>{{item.title}}</h1>
            <p>{{item.text_1}}</p>
            <p>{{item.text_2}}</p>
            <p>{{item.text_3}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="my-title">
        <h1>匹配建议</h1>
      </div>
      <div class="titleImg">
        <img src="../images/type/zubu/pipe.png" alt="1" width="325px" />
      </div>
      <div class="banner-bottom">
        <div v-for="(item,index) in bannerImgList_1" :key="index" @click="menu(index)" class="box">
          <img :src="item.imgUrl" :alt="index" width="70%" />
        </div>
      </div>
    </div>
    <div v-if="isIndex==1">
      <div class="titleImg">
        <img src="../images/type/xiazhi/title.png" alt="1" width="150px" />
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
      <van-swipe :loop="false" :width="300" :show-indicators="false" :stop-propagation="false">
        <van-swipe-item v-for="(item,index) in zcList_1" :key="index">
          <div class="cpx">
            <h1>{{item.title}}</h1>
            <p>{{item.text_1}}</p>
            <p>{{item.text_2}}</p>
            <p>{{item.text_3}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="my-title">
        <h1>匹配建议</h1>
      </div>
      <div class="titleImg">
        <img src="../images/type/xiazhi/pipe.png" alt="1" width="325px" />
      </div>
      <div class="banner-bottom">
        <div v-for="(item,index) in bannerImgList_2" :key="index" @click="menu(index)" class="box">
          <img :src="item.imgUrl" :alt="index" width="70%" />
        </div>
      </div>
    </div>
    <div v-if="isIndex==2">
      <div class="titleImg">
        <img src="../images/type/qugan/title.png" alt="1" width="150px" />
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
      <van-swipe :loop="false" :width="300" :show-indicators="false" :stop-propagation="false">
        <van-swipe-item v-for="(item,index) in zcList_2" :key="index">
          <div class="cpx">
            <h1>{{item.title}}</h1>
            <p>{{item.text_1}}</p>
            <p>{{item.text_2}}</p>
            <p>{{item.text_3}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="my-title">
        <h1>匹配建议</h1>
      </div>
      <div class="titleImg">
        <img src="../images/type/qugan/pipe.png" alt="1" width="325px" />
      </div>
      <div class="banner-bottom">
        <div v-for="(item,index) in bannerImgList_3" :key="index" @click="menu(index)" class="box">
          <img :src="item.imgUrl" :alt="index" width="70%" />
        </div>
      </div>
    </div>
    <div v-if="isIndex==3">
      <div class="titleImg">
        <img src="../images/type/jichu/title.png" alt="1" width="150px" />
      </div>
      <div class="my-title">
        <h1>基础发育测评</h1>
      </div>
      <div class="next_introduce">通过对全身形态及数据的采集获取骨骼发育的基本数据为其他部位测评结果的判断提供参考依据。 建议，指导健康发育。</div>
      <div class="my-title">
        <h1>测评项介绍</h1>
      </div>
      <van-swipe :loop="false" :width="300" :show-indicators="false" :stop-propagation="false">
        <van-swipe-item v-for="(item,index) in zcList_3" :key="index">
          <div class="cpx">
            <h1>{{item.title}}</h1>
            <p>{{item.text_1}}</p>
            <p>{{item.text_2}}</p>
            <p>{{item.text_3}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="my-title">
        <h1>匹配建议</h1>
      </div>
      <div class="titleImg">
        <img src="../images/type/jichu/pipe.png" alt="1" width="325px" />
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
      zcList_3: [
        {
          title: "全身3D扫描",
          text_1: "扫描人体各个部位",
          text_2: "采用深度传感器和激光三维重建的原理",
          text_3: "迅速获取人体数据"
        },
        {
          title: "骨密度测评",
          text_1: "骨密度，是测量骨质量的一个重要标志",
          text_2: "安全无害的反映骨结构及骨强度",
          text_3: "提供骨骼发育的可参考数据"
        },
        {
          title: "足底压力分析",
          text_1: "测量人体足底压力分布情况",
          text_2: "获取静态和动态下，足底压力分布情况 ",
          text_3: "对预防足部问题和缓解足底受力起着重要的意义 "
        },
        {
          title: "3D足部扫描",
          text_1: "扫描足部360°，获取足部三维模型",
          text_2: "初步评估足弓及跟骨发育情况",
          text_3: "为个性化定制提供重要的数据"
        },
        {
          title: "体格测评",
          text_1: "测量身高",
          text_2: "测量体重",
          text_3: "作为其他部位发育的参考依据"
        }
      ],
      zcList_2: [
        {
          title: "脊柱发育测评",
          text_1: "测量并评估人体脊柱",
          text_2: "通过观测棘突连线得出发育指数",
          text_3: "脊柱作为连接上肢和下肢的部位起着重要的枢纽作用"
        },
        {
          title: "肩胛骨测评",
          text_1: "测量并评估人体两肩",
          text_2: "通过设备内置拉线传感器测量其两侧肩峰垂直方向高度",
          text_3: "获取两肩发育数值"
        },
        {
          title: "颈部活动度测评",
          text_1: "测量并评估人体颈部",
          text_2: "对于预防斜颈起着重要的作用",
          text_3: "获取颈部活动角度，得出颈部活动指数"
        },
        {
          title: "胸部测评",
          text_1: "筛查胸部发育情况",
          text_2: "获取胸部发育指数",
          text_3: "给予针对性建议"
        },
        {
          title: "脊柱活动趋势测评",
          text_1: "测量并评估人体脊柱",
          text_2: "对于预防习惯性驼背起着重要的保护作用",
          text_3: "获取不同姿态下脊柱的活动指数"
        },
        {
          title: "3D足部扫描",
          text_1: "扫描足部360°，获取足部三维模型",
          text_2: "初步评估足弓及跟骨发育情况",
          text_3: "为个性化定制提供重要的数据"
        },
        {
          title: "体格测评",
          text_1: "测量身高",
          text_2: "测量体重",
          text_3: "作为其他部位发育的参考依据"
        }
      ],
      zcList_1: [
        {
          title: "膝关节冠状面测评",
          text_1: "测量并评估人体膝关节冠状面（正面）",
          text_2: "获取膝关节冠状面详细数值",
          text_3: "对下肢力线和膝关节具有重要意义"
        },
        {
          title: "膝关节矢状面测评",
          text_1: "测量并评估人体膝关节矢状面（侧面）",
          text_2: "获取膝关节矢状面发育数值",
          text_3: "对下肢力线和膝关节具有重要意义"
        },
        {
          title: "下肢发育测评",
          text_1: "测量并评估人体双下肢",
          text_2: "获取双下肢发育数值",
          text_3: "对下肢力线具有重要意义"
        },
        {
          title: "骨盆测评",
          text_1: "测量并评估人体骨盆",
          text_2: "获取骨盆发育数值",
          text_3: "对人体力线起着承上启下稳定支撑的重要作用"
        },
        {
          title: "3D足部扫描",
          text_1: "扫描足部360°，获取足部三维模型",
          text_2: "初步评估足弓及跟骨发育情况",
          text_3: "为个性化定制提供重要的数据"
        },
        {
          title: "体格测评",
          text_1: "测量身高",
          text_2: "测量体重",
          text_3: "作为其他部位发育的参考依据"
        }
      ],
      zcList: [
        {
          title: "足弓发育测评",
          text_1: "测量并评估人体足弓发育不良或正常",
          text_2: "光学反射出足底实时印记，系统自动计算出足弓发育详细比值",
          text_3: "对预防足部问题和保护足弓起着重要的意义"
        },
        {
          title: "跟骨发育测评",
          text_1: "测量并评估人体跟骨",
          text_2: "系统自动计算出跟骨发育详细数值",
          text_3: "对预防足部问题和保护跟骨处于中立位起着重要的意义"
        },
        {
          title: "足底压力分析",
          text_1: "测量人体足底压力分布情况",
          text_2: "获取静态和动态下，足底压力分布情况",
          text_3: "对预防足部问题和缓解足底受力起着重要的意义"
        },
        {
          title: "3D足部扫描",
          text_1: "扫描足部360°，获取足部三维模型",
          text_2: "初步评估足弓及跟骨发育情况",
          text_3: "为个性化定制提供重要的数据"
        },
        {
          title: "体格测评",
          text_1: "测量身高",
          text_2: "测量体重",
          text_3: "作为其他部位发育的参考依据"
        }
      ],
      bannerImgList_1: [
        { name: "足部测评", imgUrl: require("../images/type/zubu/icon_1.png") },
        { name: "下肢测评", imgUrl: require("../images/type/zubu/icon_2.png") },
        { name: "躯干测评", imgUrl: require("../images/type/zubu/icon_3.png") },
        { name: "基础测评", imgUrl: require("../images/type/zubu/icon_4.png") }
      ],
      bannerImgList_2: [
        {
          name: "足部测评",
          imgUrl: require("../images/type/xiazhi/icon_1.png")
        },
        {
          name: "下肢测评",
          imgUrl: require("../images/type/xiazhi/icon_2.png")
        },
        { name: "躯干测评", imgUrl: require("../images/type/zubu/icon_3.png") },
        { name: "基础测评", imgUrl: require("../images/type/zubu/icon_4.png") }
      ],
      bannerImgList_3: [
        {
          name: "足部测评",
          imgUrl: require("../images/type/xiazhi/icon_1.png")
        },
        { name: "下肢测评", imgUrl: require("../images/type/zubu/icon_2.png") },
        {
          name: "躯干测评",
          imgUrl: require("../images/type/qugan/icon_3.png")
        },
        {
          name: "基础测评",
          imgUrl: require("../images/type/xiazhi/icon_4.png")
        }
      ],
      bannerImgList_4: [
        {
          name: "足部测评",
          imgUrl: require("../images/type/xiazhi/icon_1.png")
        },
        { name: "下肢测评", imgUrl: require("../images/type/zubu/icon_2.png") },
        { name: "躯干测评", imgUrl: require("../images/type/zubu/icon_3.png") },
        { name: "基础测评", imgUrl: require("../images/type/jichu/icon_4.png") }
      ]
    };
  },
  created() {},
  mounted() {
    this.isIndex = this.$route.query.id;
  },
  methods: {
    menu(index) {
      this.isIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
#type {
  margin-top: 4rem;
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
  padding: 1rem 0;
  color: rgba(68, 68, 68, 1);
  line-height: 2.4rem;
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

.cpx {
  height: 200px;
  box-sizing: border-box;
  margin: 10px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
  h1 {
    font-family: MicrosoftYaHei;
    font-size: 1rem;
    font-stretch: normal;
    letter-spacing: 3px;
    color: #3f8e0c;
    margin-bottom: 2rem;
    font-weight: bold;
    color: rgba(130, 154, 54, 1);
  }
  p {
    font-size: 0.9rem;
    letter-spacing: 1px;
    color: #999;
    line-height: 1.5rem;
    padding-left: 20px;
    position: relative;
    margin-bottom: 1.5rem;
  }
  p::after {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    background: #829a36;
    position: absolute;
    left: 0;
    top: 50%;
    border-radius: 50%;
    transform: translate(0, -50%);
  }
}
// .swiper-container {
//     width: 600px;
//     height: 300px;
// }
</style>