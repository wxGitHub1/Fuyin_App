<template>
  <div id="home">
    <div class="text-C img1">
      <img :src="img1" alt="img1" width="242px" />
    </div>
    <div class="text-C margin-tb-40">
      <img :src="img2" alt="img2" width="334px" />
    </div>
    <div class="margin-lr-P5">
      <h1 class="text-C margin-tb-40 why">骨骼测评的意义？</h1>
      <div v-for="(item,index) in whyList" :key="index" class="container">
        <div class="image">
          <img :src="item.imgUrl" :alt="index" width="50px"/>
        </div>
        <div class="text">
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    <div class="width-p90 margin-auto border-1">
      <div class="container_fouth">{{myText}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img1: require("@/images/home/img_gu.png"),
      img2: require("@/images/home/img_boy.png"),
      img3: require("@/images/home/icon_01.png"),
      whyList: [
        {
          imgUrl: require("@/images/home/icon_01.png"),
          title: "了解孩子发育现状",
          text: "进行全面的骨骼测评，可清晰了解到孩子的发育现状。"
        },
        {
          imgUrl: require("@/images/home/icon_02.png"),
          title: "持续跟踪孩子发育状况",
          text:
            "骨骼发育是一个持续的过程，儿童和青少年时期骨骼发育速度最快，定期更新发育数据是防患于未然最好的方法。"
        },
        {
          imgUrl: require("@/images/home/icon_03.png"),
          title: "及早发现骨骼发育问题",
          text:
            "骨骼发育影响孩子的一生，全面的骨骼测评可以及早发现潜在的问题，并及时进行干预。"
        },
        {
          imgUrl: require("@/images/home/icon_04.png"),
          title: "匹配适合的运动或产品",
          text:
            "每个孩子的骨骼测评数据都不相同，根据这些数据我们推荐适合每一个孩子的运动建议或矫形产品。"
        }
      ],
      myText:
        "儿童时期是孩子生长发育的黄金时期，这一时期孩子的骨骼可塑性极强，同时也极易变形，所以家长需要格外关注孩子的骨骼发育，定期测评，了解孩子的发育现状，一旦孩子存在任何骨骼发育问题，可尽早干预矫正，让孩子拥有一个完美的身形体态和健康的身体，是骨骼测评的最终目的。"
      // title: [
      //   { id: "1", title: "标题1" },
      //   { id: "2", title: "标题2" },
      //   { id: "3", title: "标题3" },
      //   { id: "4", title: "标题4" },
      //   { id: "4", title: "标题5" }
      // ],
      // num: 20
    };
  },
  methods: {
    // tabChange(index, title) {
    //   this.num = (index + 1) * 20;
    // },
    // onRefresh(done) {
    //   setTimeout(() => {
    //     done();
    //   }, 1500);
    // },
    // onInfinite(done) {
    //   setTimeout(() => {
    //     this.num += 50;
    //     done();
    //   }, 1500);
    // }
  }
};
</script>
<style lang="scss" scoped>
#home {
  margin-top: 4rem;
  padding-top: 1px;
}
.img1{
  margin: 5rem 0;
}
.why {
  font-size: 2.9rem;
  color: rgba(130, 154, 54, 1);
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
      font-size: 1.5rem;
      font-weight: 600;
      color: rgba(35, 35, 35, 1);
    }
    p {
      padding-top: 1.2rem;
      font-size: 1.3rem;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 1.8rem;
    }
  }
}
.container_fouth {
  font-size: 1.3rem;
  font-family: CTZhongYuanSJ;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 2.4rem;
  padding: 3.4rem 0;
}
.border-1 {
  border-top: 1px solid rgba(1, 1, 1, 0.3);
}
// #home {
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   padding-top:2.5rem;
// }
</style>