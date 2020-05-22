<template>
  <div id="fuyin">
    <div>
      <img :src="img1" alt="img1" width="100%" />
    </div>
    <div class="number">
      <div class="container">
        <h3>1996</h3>
        <p>成立年份</p>
      </div>
      <div class="container">
        <h3>88</h3>
        <p>专利技术</p>
      </div>
      <div class="container">
        <h3>
          40
          <span>万</span>
        </h3>
        <p>服务人数</p>
      </div>
      <div class="container">
        <h3>500</h3>
        <p>团队成员</p>
      </div>
    </div>
    <div class="border-1-line"></div>
    <div class="introduce">
      <div class="my-title">
        <h1>关于我们</h1>
      </div>
      <div
        class="text"
      >陕西福音康复集团自1996年成立以来， 21年始终致力于人类骨骼健康事业的研究与发展。集团前期通过矫形器研发生产以及骨骼疾病治疗，积累了庞大的骨骼病例数据库，目前业务遍布全国各地。今天的福音康复已服务40万人次，已发展为全球唯一一家能提供安全、科技、智能的人体全面骨骼测评及骨骼健康预防方案的骨骼健康管理机构。</div>
    </div>
    <div class="my-title">
      <h1>联系我们</h1>
    </div>
    <my-map></my-map>
    <div class="address">
      <p>客服电话：029-6888 2888</p>
      <p>服务时间：周一至周日9:00-18:00</p>
      <p>测评地址：陕西省西安市未央区经开万科中心15层</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img1: require("../images/fuyin/img_qia.png")
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
#fuyin {
  margin-top: 4rem;
}
.number {
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  //  border-bottom: 1px solid rgba(1, 1, 1, 0.3);
  .container {
    display: inline-block;
    width: 23%;
    text-align: center;
    margin-left: 0.2rem;
    h3 {
      font-size: 1.7rem;
      color: #444444;
      font-weight: 600;
      span{
        font-size: 1.2rem;
      }
    }
    p {
      color: #898989;
      font-size: 0.7rem;
    }
  }
}
.introduce {
  width: 90%;
  margin: 0 auto;
}
.text {
  font-size: 0.9rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 2.4rem;
}
.address {
  width: 90%;
  margin: 0 auto;
  color: #6b6b6b;
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding: 3rem 0 1.5rem;
  p {
    margin-bottom: 10px;
  }
}
</style>