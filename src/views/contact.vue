<template>
  <div id="contact">
    <div>
      <img :src="img1" alt="img1" width="100%" />
    </div>
    <h1>{{text1}}</h1>
    <h2>{{text2}}</h2>
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
      text1: "陕西福音康复集团",
      text2:
        "福音集团致力于人类骨骼健康事业的研究与发展，积累了庞大的骨骼病例数据库。",
      img1: require("../images/banner.png")
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
#contact {
  margin-top: 2.5rem;
}
h1,
h2 {
  width: 90%;
  margin: 0 auto;
  font-weight: 100;
  letter-spacing: 1px;
  font-size: 1.2rem;
  padding: 1.2rem 0 0 0;
  color: #898989;
}
h2 {
  font-size: 0.95rem;
  color: #a2a2a2;
  padding-bottom: 1.2rem;
}
.address {
  width: 90%;
  margin: 0 auto;
  color: #6b6b6b;
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding: 1.2rem 0 1.5rem;
  p {
    margin-bottom: 10px;
  }
}
</style>