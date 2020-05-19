<template>
  <div id="type">
   
    <div class="my-title">
      <h1>骨骼测评的组成</h1>
    </div>
    <van-swipe :loop="false" :width="120" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in zcList" :key="index">
        <div class="guge-zc">
          <img :src="item.imgUrl" :alt="index" />
          <p>{{item.title}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      
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
  mounted(){
      console.log("参数id="+this.$route.query.id)
  },
  methods: {  }
};
</script>
<style lang="scss" scoped>
#type {
  margin-top: 2.5rem;
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