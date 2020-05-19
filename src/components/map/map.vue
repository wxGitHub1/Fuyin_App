<template>
    <div class="map">
      <div id="container"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let map = new AMap.Map("container", {
        zoom: 15, //级别
        center: [108.94830901835249, 34.34910488726544], //中心点坐标
        features: ["bg", "road", "building", "point"]
      });
      let marker = new AMap.Marker({
        position: [108.94830901835249, 34.34910488726544]
      });
      map.add(marker);
      // 同时引入工具条插件，比例尺插件和鹰眼插件
      AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
        // // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        map.addControl(new AMap.ToolBar());
        // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
        map.addControl(new AMap.Scale());
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: 180px;
}
</style>