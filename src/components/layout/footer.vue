<template>
  <div id="footer">
    <div class="phone">
      <div class="text">
        <div class="animated tada">关于骨骼测评</div>
      </div>
      <div class="number">
        <a href="tel: 029-6888-2888">029-6888-2888</a>
        <p>欢迎拨打咨询电话</p>
      </div>
    </div>
    <div class="intr">
      <a target="_blank" href="http://www.beian.miit.gov.cn">
        <p>Copyright@1996_2018西安福音康复有限公司版权所有保留一切权利</p>
        <p>陕ICP备11013478号-1</p>
      </a>
    </div>
    <div style="width:300px;margin:0 auto; padding:10px 0;text-align: center;">
      <a
        target="_blank"
        href="http://www.beian.miit.gov.cn"
        style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
      >
        <img :src="GA_ImgUrl" style="float:left;" />
        <p
          style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;font-size:0.2rem"
        >陕公网安备 61010402000448号</p>
      </a>
    </div>
  </div>
  <!-- <van-tabbar 
        v-model="active" 
        active-color="#07c160"
        @change="tabClick"
    >
        <van-tabbar-item icon="home-o" replace>标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">按钮</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>-->
</template>

<script>
// import { Tabbar, TabbarItem } from 'vant';
export default {
  data() {
    return {
      GA_ImgUrl: require("@/images/BA.png")
    };
  }
  // components:{
  //     [Tabbar.name]: Tabbar,
  //     [TabbarItem.name]: TabbarItem,
  // },
  // props: {
  //     index: {
  //         type: Number,
  //         default: 0
  //     }
  // },
  // data(){
  //     return {
  //         active: this.index
  //     }
  // },
  // methods:{
  //     tabClick(key){
  //     }
  // },
};
</script>
<style lang="scss" scoped>
#footer {
  width: 100%;
}
#footer .phone {
  width: 90%;
  margin: 0 auto;
  color: #a3b271;
  font-size: 1rem;
  font-weight: 700;
  border-top: 1px solid rgba(1, 1, 1, 0.3);
  border-bottom: 1px solid rgba(1, 1, 1, 0.3);
}
.phone .number,
.phone .text {
  vertical-align: middle;
  display: inline-block;
  width: 49%;
  text-align: center;
  margin: 1.3rem 0;
  height: 2.5rem;
}
.phone .text div {
  line-height: 2.5rem;
}
.phone .number a {
  line-height: 1.5rem;
  color: #a3b271;
}
.phone .number p {
  line-height: 1rem;
}
.phone > div:last-child {
  border-left: 1px solid rgba(1, 1, 1, 0.3);
}
.phone .number p {
  font-size: 0.6rem;
  color: #b7b7b7;
}
.intr {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-top: 1rem;
}
.intr p {
  font-size: 0.5rem;
  color: #9d9d9d;
  margin: 0;
  font-weight: 0;
}
.intr > p:last-child {
  margin-top: 0.3rem;
}
</style>